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
  "w-full h-12 rounded-xl bg-background border border-border px-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";

export function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const payload = { ...data, source: "Landing Page PicJoy" };
      await fetch("https://orbitalflow.com.br/api/public/intake/82551844369f4aa6ad912c5b684ba871", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      console.log("submission", data);
      toast.success("Inscrição enviada!", {
        description: "Em até 48h um curador da PicJoy entra em contato.",
      });
      reset();
    } catch (error) {
      toast.error("Erro ao enviar inscrição", {
        description: "Por favor, tente novamente mais tarde.",
      });
    }
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
          className="mt-12 rounded-3xl border border-border bg-card/95 p-8 md:p-10 ring-soft shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nome completo" htmlFor="name" error={errors.name?.message}>
              <input id="name" {...register("name")} className={inputCls} placeholder="Como aparece no documento" />
            </Field>
            <Field label="E-mail" htmlFor="email" error={errors.email?.message}>
              <input id="email" type="email" {...register("email")} className={inputCls} placeholder="voce@email.com" />
            </Field>
            <Field label="WhatsApp" htmlFor="whatsapp" error={errors.whatsapp?.message}>
              <input id="whatsapp" {...register("whatsapp")} className={inputCls} placeholder="(11) 99999-9999" />
            </Field>
            <Field label="Instagram" htmlFor="instagram" error={errors.instagram?.message}>
              <input id="instagram" {...register("instagram")} className={inputCls} placeholder="@seuusuario" />
            </Field>
            <Field label="Cidade" htmlFor="city" error={errors.city?.message}>
              <input id="city" {...register("city")} className={inputCls} placeholder="São Paulo, SP" />
            </Field>

            <Field label="Tipo de fotógrafo" htmlFor="type" error={errors.type?.message}>
              <select id="type" {...register("type")} className={inputCls} defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Esportivo</option>
                <option>Eventos sociais / formaturas</option>
                <option>Corporativo</option>
                <option>Shows e festivais</option>
                <option>Generalista</option>
                <option>Não sou fotógrafo</option>
              </select>
            </Field>

            <Field label="Já possui eventos?" htmlFor="hasEvents" error={errors.hasEvents?.message}>
              <select id="hasEvents" {...register("hasEvents")} className={inputCls} defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Sim, com fluxo recorrente</option>
                <option>Sim, eventualmente</option>
                <option>Ainda não</option>
              </select>
            </Field>

            <Field label="Quantos eventos por mês?" htmlFor="monthly" error={errors.monthly?.message}>
              <select id="monthly" {...register("monthly")} className={inputCls} defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>1 a 3</option>
                <option>4 a 8</option>
                <option>9 a 15</option>
                <option>15+</option>
              </select>
            </Field>

            <Field label="Evento que pode indicar agora" htmlFor="eventName" error={errors.eventName?.message}>
              <input id="eventName" {...register("eventName")} className={inputCls} placeholder="Nome ou descrição do evento" />
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
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block">{label}</label>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </div>
  );
}
