import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, ShieldCheck } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(8, "WhatsApp inválido"),
  instagram: z.string().min(2, "Instagram inválido"),
  city: z.string().min(2, "Informe sua cidade"),
  type: z.string().min(1, "Selecione um tipo"),
  hasEvents: z.string().min(1, "Selecione uma opção"),
  monthly: z.string().min(1, "Selecione uma opção"),
  eventName: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputCls =
  "w-full h-12 rounded-xl bg-background/60 border border-border px-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";

export function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("submission", data);
    toast.success("Inscrição enviada!", {
      description: "Em até 48h um curador da PicJoy entra em contato.",
    });
    reset();
  };

  return (
    <section id="cadastro" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">05 · Inscrição estratégica</div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05]">
            Entre para os <span className="text-gradient-picjoy">Caçadores de Eventos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Análise individual em até 48h. Aprovados recebem onboarding 1:1 com o time PicJoy.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 md:p-10 ring-soft"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nome completo" error={errors.name?.message}>
              <input {...register("name")} className={inputCls} placeholder="Como aparece no documento" />
            </Field>
            <Field label="E-mail" error={errors.email?.message}>
              <input type="email" {...register("email")} className={inputCls} placeholder="voce@email.com" />
            </Field>
            <Field label="WhatsApp" error={errors.whatsapp?.message}>
              <input {...register("whatsapp")} className={inputCls} placeholder="(11) 99999-9999" />
            </Field>
            <Field label="Instagram" error={errors.instagram?.message}>
              <input {...register("instagram")} className={inputCls} placeholder="@seuusuario" />
            </Field>
            <Field label="Cidade" error={errors.city?.message}>
              <input {...register("city")} className={inputCls} placeholder="São Paulo, SP" />
            </Field>

            <Field label="Tipo de fotógrafo" error={errors.type?.message}>
              <select {...register("type")} className={inputCls} defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Esportivo</option>
                <option>Eventos sociais / formaturas</option>
                <option>Corporativo</option>
                <option>Shows e festivais</option>
                <option>Generalista</option>
                <option>Não sou fotógrafo</option>
              </select>
            </Field>

            <Field label="Já possui eventos?" error={errors.hasEvents?.message}>
              <select {...register("hasEvents")} className={inputCls} defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Sim, com fluxo recorrente</option>
                <option>Sim, eventualmente</option>
                <option>Ainda não</option>
              </select>
            </Field>

            <Field label="Quantos eventos por mês?" error={errors.monthly?.message}>
              <select {...register("monthly")} className={inputCls} defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>1 a 3</option>
                <option>4 a 8</option>
                <option>9 a 15</option>
                <option>15+</option>
              </select>
            </Field>

            <Field label="Evento que pode indicar agora" error={errors.eventName?.message}>
              <input {...register("eventName")} className={inputCls} placeholder="Nome ou descrição do evento" />
            </Field>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-primary to-brand-blue-glow text-primary-foreground font-semibold shadow-[0_20px_60px_-15px_oklch(0.62_0.22_262/0.8)] hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Entrar para os Caçadores de Eventos"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-picjoy-green" />
              Seus dados ficam apenas com o time de curadoria PicJoy.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
