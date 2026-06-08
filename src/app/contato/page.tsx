import { strings } from "@/lib/strings";

export default function ContatoPage() {
  return (
    <main className="bg-background text-on-background min-h-screen">
      <section className="max-w-3xl mx-auto px-8 pt-40 pb-24 space-y-8">
        <h1 className="text-5xl font-heading font-extrabold text-primary tracking-tight">
          Entre em contato
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Dúvidas ou sugestões sobre o {strings.siteTitle}? Fale com a coordenação acadêmica.
        </p>
        <a
          href="mailto:jose.americo@coppead.ufrj.br"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold active:scale-95 duration-200 ease-in-out"
        >
          <span className="material-symbols-outlined">mail</span>
          jose.americo@coppead.ufrj.br
        </a>
      </section>
    </main>
  );
}
