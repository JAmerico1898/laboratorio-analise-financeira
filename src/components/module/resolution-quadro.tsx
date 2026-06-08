import type { Resolution, Strength } from "@/types/scenario";
import { RichText } from "./rich-text";
import { ResolutionChart } from "./resolution-chart";

const STRENGTH_PILL: Record<Strength, string> = {
  forte: "bg-emerald-100 text-emerald-700",
  parcial: "bg-amber-100 text-amber-700",
  fraco: "bg-red-100 text-red-700",
};

export function ResolutionQuadro({ resolution }: { resolution: Resolution }) {
  const { columns, strengthHeader, rows, chart } = resolution;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest text-sm">
          <thead>
            <tr>
              <th className="w-10 bg-primary px-3 py-2.5 text-left text-xs font-semibold text-on-primary" />
              {columns.map((c) => (
                <th
                  key={c}
                  className="bg-primary px-3.5 py-2.5 text-left text-xs font-semibold text-on-primary"
                >
                  {c}
                </th>
              ))}
              {strengthHeader && (
                <th className="w-28 bg-primary px-3.5 py-2.5 text-left text-xs font-semibold text-on-primary">
                  {strengthHeader}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={row.tag}
                className={ri % 2 === 1 ? "bg-surface-container-low" : undefined}
              >
                <td className="px-3 py-3 align-top font-mono text-xs font-bold text-secondary">
                  {row.tag}
                </td>
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-3.5 py-3 align-top text-on-surface ${ci === 0 ? "font-semibold" : "text-on-surface-variant"}`}
                  >
                    <RichText text={cell} />
                  </td>
                ))}
                {strengthHeader && (
                  <td className="px-3.5 py-3 align-top">
                    {row.strength && (
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 font-mono text-[11px] font-bold ${STRENGTH_PILL[row.strength]}`}
                      >
                        {row.strengthLabel ?? row.strength}
                      </span>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {chart && <ResolutionChart chart={chart} />}
    </div>
  );
}
