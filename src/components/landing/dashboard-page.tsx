import Link from "next/link";
import Image from "next/image";
import { strings } from "@/lib/strings";
import { MODULES } from "@/data/modules";

export function DashboardPage() {
  return (
    <div className="bg-background text-on-background font-sans antialiased">
      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent opacity-50" />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-heading font-extrabold text-primary leading-[1.1] tracking-tight">
              {strings.heroTitle}{" "}
              <span className="text-secondary">{strings.heroTitleAccent}</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              {strings.heroSubtitle}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-3xl" />
            <div className="relative z-10 w-full aspect-[4/3] bg-surface-container-lowest rounded-2xl shadow-2xl flex items-center justify-center p-12">
              <Image
                src="/logo/finlab-transparent.png"
                alt="FinLab — Laboratório de Análise de Demonstrações Financeiras"
                width={520}
                height={390}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Methodology Section ── */}
      <section id="metodologia" className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-heading font-bold text-primary">
              {strings.methodologyTitle}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 space-y-6">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl">topic</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{strings.methodStep1Title}</h3>
                <p className="text-on-surface-variant">{strings.methodStep1Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-8 space-y-6">
              <div className="w-16 h-16 bg-secondary text-on-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{strings.methodStep2Title}</h3>
                <p className="text-on-surface-variant">{strings.methodStep2Text}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-8 space-y-6">
              <div className="w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{strings.methodStep3Title}</h3>
                <p className="text-on-surface-variant">{strings.methodStep3Text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modules Grid Section ── */}
      <section id="modulos" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary tracking-tight">
              {strings.modulesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MODULES.map((m) => (
              <Link
                key={m.n}
                href={m.href}
                className="group cursor-pointer bg-surface-container-lowest rounded-xl p-8 hover:shadow-[0_12px_32px_rgba(25,28,29,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[320px] relative overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined">{m.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{m.cardLabel}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {m.description}
                  </p>
                </div>
                <div className="mt-8 relative z-10 flex items-center gap-2 text-secondary font-semibold text-sm">
                  <span>{strings.moduleCta}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
