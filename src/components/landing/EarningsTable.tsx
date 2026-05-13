import { Check, ShieldCheck, TrendingUp } from "lucide-react";

const tiers = [
  { tag: "Lead", label: "Lead validado", value: "R$ 100", note: "Contato qualificado e confirmado." },
  { tag: "Reunião", label: "Reunião realizada", value: "R$ 300", note: "Reunião comercial concluída." },
  { tag: "Fechado", label: "Evento fechado", value: "R$ 700", note: "Contrato assinado com o organizador." },
  { tag: "+500", label: "Evento acima de 500 pessoas", value: "+ R$ 1.000", note: "Bônus de escala · conv. 10%", highlight: true },
  { tag: "+2k", label: "Evento acima de 2.000 pessoas", value: "+ R$ 2.500", note: "Bônus de escala · conv. 15%", highlight: true },
  { tag: "Recorrente", label: "Comissão sobre receita", value: "até 5%", note: "Sobre a receita total do evento." },
];

export function EarningsTable() {
  return (
    <section id="ganhos" className="py-28 relative bg-gradient-to-b from-background to-card/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">02 · Quanto você pode ganhar</div>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05]">
              Performance real, <br />
              <span className="text-gradient-picjoy">pagamento real.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Você é remunerado em cada etapa — não só na assinatura final. Quanto maior
              o evento, maior o bônus. Sem teto.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck className="h-4 w-4 text-picjoy-green" />
                Pagamentos seguros, transparentes e baseados em performance real.
              </div>
              <div className="flex items-center gap-3 text-sm">
                <TrendingUp className="h-4 w-4 text-picjoy-yellow" />
                Bônus crescentes para eventos de grande porte.
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-picjoy-sky" />
                Comissão recorrente sobre a receita do evento.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card overflow-hidden ring-soft">
              <div className="grid grid-cols-12 px-6 py-4 border-b border-border bg-background/40 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <div className="col-span-2">Etapa</div>
                <div className="col-span-6">Marco</div>
                <div className="col-span-4 text-right">Recompensa</div>
              </div>
              {tiers.map((t) => (
                <div
                  key={t.label}
                  className={`grid grid-cols-12 items-center gap-3 px-6 py-5 border-b border-border last:border-0 ${
                    t.highlight ? "bg-gradient-to-r from-primary/10 via-transparent to-picjoy-pink/10" : ""
                  }`}
                >
                  <div className="col-span-2">
                    <span className="inline-flex font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {t.tag}
                    </span>
                  </div>
                  <div className="col-span-6">
                    <div className="font-display font-semibold text-base">{t.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.note}</div>
                  </div>
                  <div className="col-span-4 text-right">
                    <span
                      className={`font-mono font-semibold text-xl ${
                        t.highlight ? "text-gradient-picjoy" : "text-foreground"
                      }`}
                    >
                      {t.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
