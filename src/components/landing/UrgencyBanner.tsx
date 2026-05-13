import { Flame, Lock } from "lucide-react";

export function UrgencyBanner() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/15 via-picjoy-pink/10 to-picjoy-yellow/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-background/80 grid place-items-center">
              <Flame className="h-5 w-5 text-picjoy-orange" />
            </div>
            <div className="font-display font-semibold text-lg">Vagas limitadas para parceiros fundadores</div>
          </div>
          <div className="hidden md:block h-6 w-px bg-border" />
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 text-picjoy-sky" />
            Estamos selecionando fotógrafos estratégicos e pessoas de negócio.
          </div>
          <a
            href="#cadastro"
            className="md:ml-auto inline-flex items-center justify-center text-center h-11 px-6 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
}
