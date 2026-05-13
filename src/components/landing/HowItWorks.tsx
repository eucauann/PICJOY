import { ClipboardList, Link2, Handshake, Wallet } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Cadastre o evento", desc: "Indique um evento que você conhece direto pelo seu painel — leva menos de 2 minutos." },
  { icon: Link2, title: "Conecte a PicJoy ao organizador", desc: "Você apresenta, a gente entra no jogo. Sem burocracia, sem fricção." },
  { icon: Handshake, title: "Acompanhamos a negociação", desc: "Nosso time comercial conduz a venda. Você recebe atualizações em tempo real." },
  { icon: Wallet, title: "Você recebe pela aprovação", desc: "Pagamentos via Pix em cada milestone. Transparente, rastreável, sem zona cinzenta." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">01 · Como funciona</div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05]">
            Um fluxo simples, <span className="text-gradient-blue">pensado para fotógrafos.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você cuida do que faz de melhor — a rede de eventos. Nós fechamos a venda.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 ring-soft hover:border-primary/50 transition-colors"
            >
              <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
              <div className="mt-4 h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-brand-blue-glow grid place-items-center">
                <s.icon className="h-5 w-5 text-white" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
