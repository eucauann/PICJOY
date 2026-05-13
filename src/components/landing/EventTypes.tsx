import { Trophy, GraduationCap, Building2, PartyPopper, Music, Mic, Briefcase, Store, Sparkles, Users } from "lucide-react";

const events = [
  { icon: Trophy, name: "Eventos esportivos", color: "text-picjoy-green" },
  { icon: GraduationCap, name: "Universitários", color: "text-picjoy-sky" },
  { icon: Building2, name: "Corporativos", color: "text-brand-blue-glow" },
  { icon: PartyPopper, name: "Formaturas", color: "text-picjoy-pink" },
  { icon: Music, name: "Festivais", color: "text-picjoy-orange" },
  { icon: Mic, name: "Shows", color: "text-picjoy-yellow" },
  { icon: Briefcase, name: "Congressos", color: "text-picjoy-sky" },
  { icon: Store, name: "Feiras", color: "text-picjoy-green" },
  { icon: Sparkles, name: "Baladas premium", color: "text-picjoy-pink" },
  { icon: Users, name: "Eventos empresariais", color: "text-brand-blue-glow" },
];

export function EventTypes() {
  return (
    <section id="eventos" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">03 · Quais eventos buscamos</div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05]">
            Se tem gente reunida, <br />
            <span className="text-gradient-blue">tem oportunidade.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {events.map((e) => (
            <div
              key={e.name}
              className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/60 hover:bg-card/80 transition-all hover:-translate-y-1"
            >
              <e.icon className={`h-6 w-6 ${e.color}`} strokeWidth={2.2} />
              <div className="mt-4 font-display font-semibold text-sm">{e.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
