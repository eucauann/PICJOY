import { Camera } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-picjoy-pink grid place-items-center ring-soft">
            <Camera className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-tight">PicJoy Club</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Caçadores de Eventos
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#ganhos" className="hover:text-foreground transition-colors">Ganhos</a>
          <a href="#eventos" className="hover:text-foreground transition-colors">Eventos</a>
          <a href="#picjoy" className="hover:text-foreground transition-colors">PicJoy</a>
        </nav>
        <a
          href="#cadastro"
          className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-gradient-to-r from-primary to-brand-blue-glow text-primary-foreground text-sm font-semibold shadow-[0_8px_30px_-8px_oklch(0.62_0.22_262/0.7)] hover:scale-[1.02] transition-transform"
        >
          Quero Participar
        </a>
      </div>
    </header>
  );
}
