import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-picjoy-pink grid place-items-center">
            <Camera className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-display font-bold text-sm">PicJoy Club</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Caçadores de Eventos · 2025
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#ganhos" className="hover:text-foreground transition-colors">Ganhos</a>
          <a href="#cadastro" className="hover:text-foreground transition-colors">Inscrever-se</a>
        </div>
        <div className="text-[11px] text-muted-foreground">
          © 2025 PicJoy · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
