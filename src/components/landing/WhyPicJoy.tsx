import { Brain, Send, Store, Coins, Megaphone, Palette, TrendingUp, Heart } from "lucide-react";
import backstage from "@/assets/event-backstage.jpg";

const benefits = [
  { icon: Brain, title: "Reconhecimento facial por IA", desc: "Cada participante encontra suas fotos em segundos." },
  { icon: Send, title: "Entrega automática de fotos", desc: "Distribuição instantânea, sem fricção operacional." },
  { icon: Store, title: "Marketplace oficial do evento", desc: "Loja branded, ativa antes, durante e depois." },
  { icon: Coins, title: "Monetização de fotos", desc: "Receita escalável a cada participante." },
  { icon: Megaphone, title: "Patrocinadores integrados", desc: "Espaço nativo para marcas no fluxo de fotos." },
  { icon: Palette, title: "Branding profissional", desc: "Identidade do evento em cada ponto de contato." },
  { icon: TrendingUp, title: "Mais receita para o evento", desc: "Nova linha de receita digital, sem custo inicial." },
  { icon: Heart, title: "Mais experiência para o público", desc: "Memórias entregues no celular em tempo real." },
];

export function WhyPicJoy() {
  return (
    <section id="picjoy" className="py-28 relative bg-gradient-to-b from-card/40 to-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">04 · Por que a PicJoy</div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05]">
            A plataforma que <span className="text-gradient-picjoy">organizadores adoram</span> assinar.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Você não está vendendo cobertura fotográfica. Está vendendo uma nova
            economia de imagem para o evento — com tecnologia, marca e receita.
          </p>
          <div className="mt-8 rounded-3xl overflow-hidden border border-border ring-soft">
            <img src={backstage} alt="Bastidores PicJoy" loading="lazy" className="w-full h-72 object-cover" />
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 ring-soft hover:border-primary/50 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-picjoy-pink/20 grid place-items-center">
                <b.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <div className="mt-4 font-display font-semibold">{b.title}</div>
              <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
