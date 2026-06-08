$ErrorActionPreference = "Stop"

function Clean-Html([string]$Value) {
  if ($null -eq $Value) { return "" }
  $s = $Value
  $s = [regex]::Replace($s, "<\s*(strong|b)\s*>(.*?)<\s*/\s*\1\s*>", '**$2**', "Singleline,IgnoreCase")
  $s = [regex]::Replace($s, "<\s*em\s*>(.*?)<\s*/\s*em\s*>", '*$1*', "Singleline,IgnoreCase")
  $s = [regex]::Replace($s, "<\s*br\s*/?\s*>", " ", "IgnoreCase")
  $s = [regex]::Replace($s, "<[^>]+>", " ", "Singleline")
  $s = [System.Net.WebUtility]::HtmlDecode($s)
  $s = $s -replace "\u00a0", " "
  $s = [regex]::Replace($s, "\s+", " ").Trim()
  return $s
}

function Escape-Ts([string]$Value) {
  if ($null -eq $Value) { return '""' }
  return ($Value | ConvertTo-Json -Compress)
}

function Parse-Table([string]$TableHtml) {
  $trs = [regex]::Matches($TableHtml, "<tr[^>]*>(.*?)</tr>", "Singleline,IgnoreCase")
  if ($trs.Count -eq 0) { return $null }
  $rows = @()
  foreach ($tr in $trs) {
    $cells = @()
    $cellMatches = [regex]::Matches($tr.Groups[1].Value, "<t[hd][^>]*>(.*?)</t[hd]>", "Singleline,IgnoreCase")
    foreach ($c in $cellMatches) { $cells += (Clean-Html $c.Groups[1].Value) }
    if ($cells.Count -gt 0) { $rows += ,$cells }
  }
  if ($rows.Count -eq 0) { return $null }
  return [pscustomobject]@{ columns = $rows[0]; rows = @($rows | Select-Object -Skip 1) }
}

function Parse-ResolutionRows([string]$TableHtml) {
  $parsed = Parse-Table $TableHtml
  if ($null -eq $parsed) { return $null }
  $columns = @($parsed.columns | Select-Object -Skip 1)
  $hasStrength = $false
  $strengthHeader = $null
  if ($columns.Count -gt 0) {
    $lastHeader = $columns[$columns.Count - 1]
    $bodyHasPill = [regex]::IsMatch($TableHtml, 'class="[^"]*\bpill\s+([smw])\b', "IgnoreCase")
    if ($bodyHasPill) {
      $hasStrength = $true
      $strengthHeader = if ([string]::IsNullOrWhiteSpace($lastHeader)) { "Classificação" } else { $lastHeader }
      $columns = @($columns | Select-Object -First ($columns.Count - 1))
    }
  }

  $trMatches = [regex]::Matches($TableHtml, "<tbody[^>]*>(.*?)</tbody>", "Singleline,IgnoreCase")
  $body = if ($trMatches.Count) { $trMatches[0].Groups[1].Value } else { $TableHtml }
  $trs = [regex]::Matches($body, "<tr[^>]*>(.*?)</tr>", "Singleline,IgnoreCase")
  $rows = @()
  foreach ($tr in $trs) {
    $tds = [regex]::Matches($tr.Groups[1].Value, "<td[^>]*>(.*?)</td>", "Singleline,IgnoreCase")
    if ($tds.Count -eq 0) { continue }
    $tag = Clean-Html $tds[0].Groups[1].Value
    if ($tag -notmatch "^[ABC]$") { continue }
    $limit = if ($hasStrength) { $tds.Count - 2 } else { $tds.Count - 1 }
    $cells = @()
    for ($i = 1; $i -le $limit; $i++) { $cells += (Clean-Html $tds[$i].Groups[1].Value) }
    $row = [ordered]@{ tag = $tag; cells = $cells }
    if ($hasStrength) {
      $lastHtml = $tds[$tds.Count - 1].Groups[1].Value
      $pill = [regex]::Match($lastHtml, 'class="[^"]*\bpill\s+([smw])\b[^"]*"[^>]*>(.*?)</span>', "Singleline,IgnoreCase")
      if ($pill.Success) {
        $strength = switch ($pill.Groups[1].Value) {
          "s" { "forte" }
          "m" { "parcial" }
          default { "fraco" }
        }
        $label = Clean-Html $pill.Groups[2].Value
        $row.strength = $strength
        if ($label -and $label -ne $strength) { $row.strengthLabel = $label }
      }
    }
    $rows += [pscustomobject]$row
  }
  return [pscustomobject]@{ columns = $columns; strengthHeader = $strengthHeader; rows = $rows }
}

function Ts-Array([array]$Values) {
  return "[" + (($Values | ForEach-Object { Escape-Ts $_ }) -join ", ") + "]"
}

function Ts-Table($Table, [string]$Indent) {
  if ($null -eq $Table) { return "" }
  $out = @()
  $out += "${Indent}displayTable: {"
  $out += "${Indent}  columns: $(Ts-Array $Table.columns),"
  $out += "${Indent}  rows: ["
  foreach ($row in $Table.rows) { $out += "${Indent}    $(Ts-Array $row)," }
  $out += "${Indent}  ],"
  $out += "${Indent}},"
  return ($out -join "`r`n")
}

function Ts-Resolution($Resolution, [string]$Indent) {
  $out = @()
  $out += "${Indent}resolution: {"
  $out += "${Indent}  prompt: $(Escape-Ts $Resolution.prompt),"
  $out += "${Indent}  columns: $(Ts-Array $Resolution.columns),"
  if ($Resolution.strengthHeader) { $out += "${Indent}  strengthHeader: $(Escape-Ts $Resolution.strengthHeader)," }
  $out += "${Indent}  rows: ["
  foreach ($row in $Resolution.rows) {
    $out += "${Indent}    {"
    $out += "${Indent}      tag: $(Escape-Ts $row.tag),"
    $out += "${Indent}      cells: $(Ts-Array $row.cells),"
    if ($row.PSObject.Properties.Name -contains "strength") { $out += "${Indent}      strength: $(Escape-Ts $row.strength)," }
    if ($row.PSObject.Properties.Name -contains "strengthLabel") { $out += "${Indent}      strengthLabel: $(Escape-Ts $row.strengthLabel)," }
    $out += "${Indent}    },"
  }
  $out += "${Indent}  ],"
  $out += "${Indent}  closing: $(Escape-Ts $Resolution.closing),"
  if ($Resolution.chart) {
    $out += "${Indent}  chart: {"
    $out += "${Indent}    caption: $(Escape-Ts $Resolution.chart.caption),"
    $out += "${Indent}    valueLabel: $(Escape-Ts $Resolution.chart.valueLabel),"
    $out += "${Indent}    data: ["
    foreach ($d in $Resolution.chart.data) {
      $out += "${Indent}      { name: $(Escape-Ts $d.name), value: $($d.value) },"
    }
    $out += "${Indent}    ],"
    $out += "${Indent}  },"
  }
  $out += "${Indent}},"
  return ($out -join "`r`n")
}

function Get-GlobalTables([string]$Html) {
  $dataset = [regex]::Match($Html, '<section id="dataset">(.*?)</section>', "Singleline,IgnoreCase")
  if (-not $dataset.Success) { return @() }
  $tables = @()
  foreach ($m in [regex]::Matches($dataset.Groups[1].Value, "<table[^>]*>.*?</table>", "Singleline,IgnoreCase")) {
    $tables += (Parse-Table $m.Value)
  }
  return $tables
}

function Pick-DisplayTable([int]$Module, [int]$Scenario, $ScenarioTable, [array]$GlobalTables) {
  if ($ScenarioTable) { return $ScenarioTable }
  if ($Module -eq 4 -and $GlobalTables.Count -gt 0) { return $GlobalTables[0] }
  if ($Module -eq 5) {
    if ($Scenario -eq 3 -and $GlobalTables.Count -gt 1) { return $GlobalTables[1] }
    if ($GlobalTables.Count -gt 0) { return $GlobalTables[0] }
  }
  if ($Module -eq 6) {
    if ($Scenario -eq 2 -and $GlobalTables.Count -gt 1) { return $GlobalTables[1] }
    if ($Scenario -eq 4 -and $GlobalTables.Count -gt 2) { return $GlobalTables[2] }
    if ($GlobalTables.Count -gt 0) { return $GlobalTables[0] }
  }
  return $null
}

function Chart-For([int]$Module, [int]$Scenario) {
  if ($Module -eq 3 -and $Scenario -eq 1) {
    return [pscustomobject]@{
      caption = "Lucro de capa, lucro recorrente e caixa operacional (R$ mi)"
      valueLabel = "R$ mi"
      data = @(
        [pscustomobject]@{ name = "Lucro de capa"; value = 12 },
        [pscustomobject]@{ name = "Recorrente"; value = 3 },
        [pscustomobject]@{ name = "Caixa operacional"; value = 2 }
      )
    }
  }
  if ($Module -eq 3 -and $Scenario -eq 3) {
    return [pscustomobject]@{
      caption = "Provisão por premissa de perda (R$ mi)"
      valueLabel = "Provisão"
      data = @(
        [pscustomobject]@{ name = "2% otimista"; value = 2 },
        [pscustomobject]@{ name = "5% base"; value = 5 },
        [pscustomobject]@{ name = "9% conservadora"; value = 9 }
      )
    }
  }
  if ($Module -eq 4 -and $Scenario -eq 4) {
    return [pscustomobject]@{
      caption = "CCL x NCG e saldo de tesouraria (R$ mi)"
      valueLabel = "R$ mi"
      data = @(
        [pscustomobject]@{ name = "CCL"; value = 13 },
        [pscustomobject]@{ name = "NCG"; value = 17 },
        [pscustomobject]@{ name = "ST"; value = -4 }
      )
    }
  }
  if ($Module -eq 5 -and $Scenario -eq 3) {
    return [pscustomobject]@{
      caption = "Margem líquida: Ano 1 x Ano 2 (%)"
      valueLabel = "Margem líquida"
      data = @(
        [pscustomobject]@{ name = "Ano 1"; value = 9 },
        [pscustomobject]@{ name = "Ano 2"; value = 8 }
      )
    }
  }
  if ($Module -eq 6 -and $Scenario -eq 4) {
    return [pscustomobject]@{
      caption = "Lucro líquido x FCO em três anos (R$ mi)"
      valueLabel = "R$ mi"
      data = @(
        [pscustomobject]@{ name = "Ano 1 lucro"; value = 3.6 },
        [pscustomobject]@{ name = "Ano 1 FCO"; value = 3.4 },
        [pscustomobject]@{ name = "Ano 2 lucro"; value = 4.0 },
        [pscustomobject]@{ name = "Ano 2 FCO"; value = 0.0 },
        [pscustomobject]@{ name = "Ano 3 lucro"; value = 4.4 },
        [pscustomobject]@{ name = "Ano 3 FCO"; value = 6.0 }
      )
    }
  }
  return $null
}

function Build-Module([int]$Module) {
  $html = Get-Content -Raw -Encoding UTF8 "public/specs/spec_modulo_$Module.html"
  $h1 = Clean-Html ([regex]::Match($html, "<h1>(.*?)</h1>", "Singleline,IgnoreCase").Groups[1].Value)
  $title = ($h1 -replace "^Módulo\s+\d+\s+—\s+", "")
  $lead = Clean-Html ([regex]::Match($html, '<p class="lead">(.*?)</p>', "Singleline,IgnoreCase").Groups[1].Value)
  $subtitle = ($lead -split "(?<=[.!?])\s+", 2)[0]
  $globals = Get-GlobalTables $html

  $scenarios = @()
  for ($c = 1; $c -le 4; $c++) {
    $secMatch = [regex]::Match($html, "<section id=`"c$c`">(.*?)</section>", "Singleline,IgnoreCase")
    if (-not $secMatch.Success) { throw "Scenario c$c not found in module $Module" }
    $sec = $secMatch.Groups[1].Value
    $h2 = Clean-Html ([regex]::Match($sec, "<h2[^>]*>(.*?)</h2>", "Singleline,IgnoreCase").Groups[1].Value)
    $scenarioTitle = ($h2 -replace "^Cenário\s+\d+\s+—\s+", "")
    $badge = Clean-Html ([regex]::Match($sec, '<span class="badge[^"]*">(.*?)</span>', "Singleline,IgnoreCase").Groups[1].Value)
    $difficulty = if ($badge -match "Super") { "super" } elseif ($badge -match "Avan") { "avancado" } else { "intermediario" }
    $concept = Clean-Html ([regex]::Match($sec, "Conceito-chave:\s*(.*?)</em>", "Singleline,IgnoreCase").Groups[1].Value)
    $context = Clean-Html ([regex]::Match($sec, "<h4>Contexto</h4>\s*<p>(.*?)</p>", "Singleline,IgnoreCase").Groups[1].Value)

    $firstStepPos = $sec.IndexOf('<div class="step">')
    $preStep = if ($firstStepPos -gt 0) { $sec.Substring(0, $firstStepPos) } else { "" }
    $scenarioTable = $null
    $preTables = [regex]::Matches($preStep, "<table[^>]*>.*?</table>", "Singleline,IgnoreCase")
    if ($preTables.Count -gt 0) { $scenarioTable = Parse-Table $preTables[0].Value }
    $displayTable = Pick-DisplayTable $Module $c $scenarioTable $globals

    $stepsHtml = [regex]::Matches($sec, '<div class="step">(.*?)</div>', "Singleline,IgnoreCase")
    $steps = @()
    for ($e = 0; $e -lt 3; $e++) {
      $stepHtml = $stepsHtml[$e].Groups[1].Value
      $label = Clean-Html ([regex]::Match($stepHtml, '<p class="step-label">(.*?)</p>', "Singleline,IgnoreCase").Groups[1].Value)
      $question = Clean-Html ([regex]::Match($stepHtml, '<p class="step-q">(.*?)</p>', "Singleline,IgnoreCase").Groups[1].Value)
      $lis = [regex]::Matches($stepHtml, '<li class="(ok|no)">(.*?)</li>', "Singleline,IgnoreCase")
      $options = @()
      for ($i = 0; $i -lt $lis.Count; $i++) {
        $liHtml = $lis[$i].Groups[2].Value
        $whyMatch = [regex]::Match($liHtml, '<span class="why">(.*?)</span>', "Singleline,IgnoreCase")
        $labelHtml = if ($whyMatch.Success) { $liHtml.Substring(0, $whyMatch.Index) } else { $liHtml }
        $feedback = if ($whyMatch.Success) { Clean-Html $whyMatch.Groups[1].Value } else { "" }
        $opt = [ordered]@{
          id = "c${c}e$($e + 1)-$([char](97 + $i))"
          label = Clean-Html $labelHtml
          correct = ($lis[$i].Groups[1].Value -eq "ok")
          feedback = $feedback
        }
        if ($feedback -match "50%|marcar como parcial") { $opt.partial = $true }
        $options += [pscustomobject]$opt
      }
      $steps += [pscustomobject]@{
        id = "m$Module-c$c-e$($e + 1)"
        label = $label
        question = $question
        points = 100
        options = $options
      }
    }

    $resolutionHtml = $stepsHtml[3].Groups[1].Value
    $resLabel = Clean-Html ([regex]::Match($resolutionHtml, '<p class="step-label">(.*?)</p>', "Singleline,IgnoreCase").Groups[1].Value)
    $promptMatch = [regex]::Match($resolutionHtml, '<p>(.*?)</p>', "Singleline,IgnoreCase")
    $prompt = if ($promptMatch.Success) { Clean-Html $promptMatch.Groups[1].Value } else { ($resLabel -replace "^Etapa 4\s+—\s+Resolução:\s*", "") }
    $resTableHtml = [regex]::Match($resolutionHtml, "<table[^>]*>.*?</table>", "Singleline,IgnoreCase").Value
    $resRows = Parse-ResolutionRows $resTableHtml
    $closing = Clean-Html ([regex]::Match($resolutionHtml, '<div class="note"><b>Fechamento:</b>(.*?)</div>', "Singleline,IgnoreCase").Groups[1].Value)
    $resolution = [pscustomobject]@{
      prompt = $prompt
      columns = $resRows.columns
      strengthHeader = $resRows.strengthHeader
      rows = $resRows.rows
      closing = $closing
      chart = (Chart-For $Module $c)
    }

    $scenarios += [pscustomobject]@{
      id = "m$Module-c$c"
      n = $c
      title = $scenarioTitle
      difficulty = $difficulty
      concept = $concept
      context = $context
      displayTable = $displayTable
      steps = $steps
      resolution = $resolution
    }
  }

  $out = @()
  $out += 'import type { ModuleData } from "@/types/scenario";'
  $out += ""
  $out += "export const modulo$Module`: ModuleData = {"
  $out += "  n: $Module,"
  $out += "  eyebrow: $(Escape-Ts "Módulo $Module · Aula $Module de 15"),"
  $out += "  title: $(Escape-Ts $title),"
  $out += "  subtitle: $(Escape-Ts $subtitle),"
  $out += "  intro: $(Escape-Ts $lead),"
  $out += "  scenarios: ["
  foreach ($s in $scenarios) {
    $out += "    {"
    $out += "      id: $(Escape-Ts $s.id),"
    $out += "      n: $($s.n),"
    $out += "      title: $(Escape-Ts $s.title),"
    $out += "      difficulty: $(Escape-Ts $s.difficulty),"
    $out += "      concept: $(Escape-Ts $s.concept),"
    $out += "      context: $(Escape-Ts $s.context),"
    if ($s.displayTable) {
      $caption = if ($Module -eq 4) { "Balanço-base e fórmulas de referência" } elseif ($Module -eq 5) { "DRE-base, margens e fórmulas" } elseif ($Module -eq 6) { "DFC-base e variações" } else { "Números mostrados ao aluno" }
      $out += "      displayFieldsCaption: $(Escape-Ts $caption),"
      $out += (Ts-Table $s.displayTable "      ")
    }
    $out += "      steps: ["
    foreach ($st in $s.steps) {
      $out += "        {"
      $out += "          id: $(Escape-Ts $st.id),"
      $out += "          label: $(Escape-Ts $st.label),"
      $out += "          question: $(Escape-Ts $st.question),"
      $out += "          points: 100,"
      $out += "          options: ["
      foreach ($opt in $st.options) {
        $out += "            {"
        $out += "              id: $(Escape-Ts $opt.id),"
        $out += "              label: $(Escape-Ts $opt.label),"
        $out += "              correct: $($opt.correct.ToString().ToLowerInvariant()),"
        if ($opt.PSObject.Properties.Name -contains "partial") { $out += "              partial: true," }
        $out += "              feedback: $(Escape-Ts $opt.feedback),"
        $out += "            },"
      }
      $out += "          ],"
      $out += "        },"
    }
    $out += "      ],"
    $out += (Ts-Resolution $s.resolution "      ")
    $out += "    },"
  }
  $out += "  ],"
  $out += "};"

  Set-Content -Path "src/data/modulo$Module.ts" -Value ($out -join "`r`n") -Encoding UTF8
}

foreach ($m in 2..6) { Build-Module $m }
