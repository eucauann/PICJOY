const stats = [
  { value: "1.2k+", label: "Eventos cobertos" },
  { value: "3.500", label: "Fotógrafos parceiros" },
  { value: "8M+", label: "Fotos entregues" },
  { value: "R$4.7M", label: "Pagos a parceiros" },
];

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display font-bold text-3xl md:text-4xl tracking-tight text-gradient-blue">
              {s.value}
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
