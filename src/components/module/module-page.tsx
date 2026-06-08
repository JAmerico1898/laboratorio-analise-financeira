"use client";

import { useState } from "react";
import Link from "next/link";
import type { ModuleData, Scenario } from "@/types/scenario";
import type { CompletedScenario } from "@/types/results";
import { useCompletedScenarios } from "@/hooks/use-completed-scenarios";
import { ScenarioPlayer } from "./scenario-player";

const DIFFICULTY_LABEL: Record<string, string> = {
  intermediario: "Intermediário",
  avancado: "Avançado",
  super: "Super Desafio",
};

function difficultyStyles(difficulty: string) {
  if (difficulty === "super") {
    return {
      card: "bg-tertiary-container text-white shadow-lg shadow-tertiary-container/20 hover:shadow-xl",
      badge: "bg-tertiary-fixed text-on-tertiary-fixed",
      title: "text-tertiary-fixed",
      body: "text-on-primary-container opacity-90",
      cta: "text-tertiary-fixed-dim",
    };
  }
  return {
    card: "bg-surface-container-lowest shadow-sm hover:shadow-md",
    badge: "bg-secondary-container text-on-secondary-container",
    title: "text-primary",
    body: "text-on-surface-variant",
    cta: "text-secondary",
  };
}

export function ModulePage({ data }: { data: ModuleData }) {
  const [active, setActive] = useState<Scenario | null>(null);
  const { addCompletedScenario, getCompletion } = useCompletedScenarios();

  const totalMax = data.scenarios.reduce(
    (sum, s) => sum + s.steps.reduce((a, st) => a + st.points, 0),
    0
  );
  const totalScore = data.scenarios.reduce(
    (sum, s) => sum + (getCompletion(s.id)?.score ?? 0),
    0
  );

  function handleFinish(result: CompletedScenario) {
    addCompletedScenario(result);
    setActive(null);
  }

  if (active) {
    return <ScenarioPlayer scenario={active} onFinish={handleFinish} onBack={() => setActive(null)} />;
  }

  return (
    <div className="relative min-h-screen bg-surface font-sans text-on-surface antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/3 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-28">
        <header className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-xs uppercase tracking-widest">Voltar ao laboratório</span>
          </Link>
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-secondary">{data.eyebrow}</p>
            <h1 className="mb-4 font-heading text-5xl font-extrabold leading-none tracking-tight text-primary">
              {data.title}
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant">{data.subtitle}</p>
            <p className="mt-4 leading-relaxed text-on-surface-variant">{data.intro}</p>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest px-5 py-3">
            <span className="material-symbols-outlined text-secondary">trophy</span>
            <span className="text-sm text-on-surface-variant">Pontuação do módulo</span>
            <span className="font-mono text-lg font-bold text-primary">
              {totalScore}
              <span className="text-on-surface-variant">/{totalMax}</span>
            </span>
          </div>
        </header>

        <div className="mb-8 flex items-center justify-center" style={{ height: "6rem" }}>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-[4px] text-primary md:text-4xl">
            Cenários de Análise
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.scenarios.map((scenario) => {
            const completion = getCompletion(scenario.id);
            const s = difficultyStyles(scenario.difficulty);
            const isSuper = scenario.difficulty === "super";
            return (
              <div
                key={scenario.id}
                onClick={() => setActive(scenario)}
                className={`group relative flex min-h-[300px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl p-8 transition-all ${s.card}`}
              >
                {!isSuper && (
                  <div className="absolute right-0 top-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-110" />
                )}
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>
                      {DIFFICULTY_LABEL[scenario.difficulty]}
                    </span>
                    {completion && (
                      <span className="flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-1 text-[10px] font-bold text-on-secondary-container">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        {completion.score}/{completion.maxScore}
                      </span>
                    )}
                  </div>
                  <div className="mb-2 font-mono text-xs text-on-surface-variant opacity-80">
                    Cenário {scenario.n}
                  </div>
                  <h3 className={`mb-4 font-heading text-2xl font-bold ${s.title}`}>{scenario.title}</h3>
                  <p className={`leading-relaxed ${s.body}`}>{scenario.concept}</p>
                </div>
                <div className={`relative mt-8 flex items-center justify-between text-sm font-bold transition-transform group-hover:translate-x-1 ${s.cta}`}>
                  <span>{completion ? "Refazer cenário" : "Iniciar cenário"}</span>
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
