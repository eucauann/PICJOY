import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { EarningsTable } from "@/components/landing/EarningsTable";
import { EventTypes } from "@/components/landing/EventTypes";
import { WhyPicJoy } from "@/components/landing/WhyPicJoy";
import { SocialProof } from "@/components/landing/SocialProof";
import { UrgencyBanner } from "@/components/landing/UrgencyBanner";
import { SignupForm } from "@/components/landing/SignupForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caçadores de Eventos PicJoy — Ganhe até R$5.000 indicando eventos" },
      {
        name: "description",
        content:
          "Programa de captação PicJoy Club: indique eventos, conecte organizadores e receba comissões por cada evento aprovado. Vagas limitadas para parceiros fundadores.",
      },
      { property: "og:title", content: "Caçadores de Eventos PicJoy" },
      {
        property: "og:description",
        content:
          "Transforme seus contatos em renda. Comissões por etapa, bônus por escala, pagamentos transparentes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <EarningsTable />
      <EventTypes />
      <WhyPicJoy />
      <SocialProof />
      <UrgencyBanner />
      <SignupForm />
      <Footer />
    </main>
  );
}
