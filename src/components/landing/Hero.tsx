import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-photographer.jpg";
import stadiumImg from "@/assets/event-stadium.jpg";
import networkingImg from "@/assets/event-networking.jpg";
import backstageImg from "@/assets/event-backstage.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-24 overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/30 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3.5 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-picjoy-yellow" />
            <span className="text-muted-foreground">Vagas limitadas para</span>
            <span className="font-semibold text-foreground">parceiros fundadores</span>
          </div>

          <h1 className="mt-6 font-display font-black tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
            Ganhe até <span className="text-gradient-picjoy">R$5.000</span>
            <br className="hidden md:block" /> indicando eventos
            <br className="hidden md:block" /> para a <span className="text-gradient-blue">PicJoy</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Transforme seus contatos em renda. Indique eventos, conecte organizadores
            e receba comissões por cada evento aprovado na plataforma.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cadastro"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-gradient-to-r from-primary to-brand-blue-glow text-primary-foreground font-semibold shadow-[0_20px_60px_-15px_oklch(0.62_0.22_262/0.8)] hover:scale-[1.02] transition-transform"
            >
              Quero Participar Agora
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 h-14 px-6 rounded-full border border-border bg-card/40 backdrop-blur text-sm font-medium hover:bg-card/70 transition-colors"
            >
              Ver como funciona
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-picjoy-green" />
              Pagamentos seguros
            </div>
            <div className="h-3 w-px bg-border" />
            <div>Performance real • Sem mensalidade</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[520px]">
              <div className="col-span-6 row-span-4 rounded-3xl overflow-hidden ring-1 ring-border/60 glow-blue">
                <img
                  src={heroImg}
                  alt="Fotógrafo profissional capturando evento"
                  className="h-full w-full object-cover"
                  width={1600}
                  height={1200}
                />
              </div>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden ring-1 ring-border/60">
                <img src={stadiumImg} alt="Estádio lotado" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden ring-1 ring-border/60">
                <img src={networkingImg} alt="Networking" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden ring-1 ring-border/60">
                <img src={backstageImg} alt="Bastidores" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 ring-soft shadow-[0_30px_80px_-30px_oklch(0_0_0/0.8)]">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Última aprovação</div>
              <div className="mt-1 font-display font-bold text-2xl text-gradient-picjoy">+ R$2.500</div>
              <div className="text-[11px] text-muted-foreground">Festival universitário · 4.200 pessoas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
