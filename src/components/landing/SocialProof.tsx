import { Quote } from "lucide-react";

const testimonials = [
  { name: "Rafael Monteiro", role: "Fotógrafo · São Paulo", quote: "Indiquei 3 eventos no primeiro mês. Recebi mais que muita produção autoral inteira." },
  { name: "Carolina Vidal", role: "Fotógrafa de eventos · Curitiba", quote: "A PicJoy fechou um festival que eu sequer cobriria. Comissão caiu no Pix em 48h." },
  { name: "Bruno Tavares", role: "Estúdio Foco · Recife", quote: "Profissionalismo de startup grande. Senti que estava jogando no time certo." },
];

export function SocialProof() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-10 md:p-16 relative overflow-hidden ring-soft">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-picjoy-pink/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <Quote className="h-10 w-10 text-primary" />
            <p className="mt-6 font-display font-bold text-3xl md:text-5xl leading-[1.1] tracking-tight">
              "Transformamos eventos em <span className="text-gradient-picjoy">experiências lucrativas</span> e escaláveis."
            </p>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              PicJoy Club · Manifesto 2025
            </div>
          </div>

          <div className="relative mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-background/40 p-6">
                <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
