"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { ResolutionChart as ResolutionChartData } from "@/types/scenario";

const BAR_COLORS = ["#00314a", "#006b5f", "#9a6b14", "#134866"];

export function ResolutionChart({ chart }: { chart: ResolutionChartData }) {
  return (
    <figure className="m-0 mt-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4">
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chart.data} margin={{ top: 18, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e1e3e4" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#3f4945" }}
              tickLine={false}
              axisLine={{ stroke: "#bfc9c4" }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: "#707975" }}
              tickLine={false}
              axisLine={false}
              width={28}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={64} isAnimationActive={false}>
              {chart.data.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                style={{ fontSize: 12, fontWeight: 700, fill: "#1b2430" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="mt-2 text-center font-mono text-[11px] text-on-surface-variant">
        {chart.caption}
      </figcaption>
    </figure>
  );
}
