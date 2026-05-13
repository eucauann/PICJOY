# PicJoy Club — Caçadores de Eventos (Landing Page)

Pacote completo da landing page, pronto para migração para qualquer servidor/plataforma sem dependência do Lovable.

---

## 1. Stack utilizada

- **Framework:** TanStack Start v1 (React 19 + Vite 7, SSR opcional)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS v4 (configurado via `src/styles.css`, sem `tailwind.config.js`)
- **Componentes UI:** shadcn/ui (Radix UI) — pasta `src/components/ui/`
- **Formulários:** `react-hook-form` + `zod` (validação)
- **Notificações:** `sonner`
- **Ícones:** `lucide-react`
- **Roteamento:** file-based em `src/routes/` (auto-gerado em `src/routeTree.gen.ts`)
- **Fontes:** Outfit, Work Sans, Geist Mono (Google Fonts, carregadas em `src/routes/__root.tsx`)

---

## 2. Estrutura de pastas

```
.
├── package.json              # dependências e scripts
├── bun.lock                  # lockfile (use bun OU substitua por npm/pnpm)
├── tsconfig.json
├── vite.config.ts            # config do Vite + TanStack Start
├── wrangler.jsonc            # config Cloudflare Workers (opcional, pode remover)
├── components.json           # config shadcn/ui
├── eslint.config.js
└── src/
    ├── styles.css            # Tailwind v4 + tokens de design (cores PicJoy)
    ├── router.tsx            # bootstrap do router
    ├── server.ts             # entry SSR (pode ser removido para deploy SPA)
    ├── start.ts
    ├── routeTree.gen.ts      # AUTO-GERADO — não editar
    ├── routes/
    │   ├── __root.tsx        # layout raiz, head/SEO global, fontes
    │   └── index.tsx         # página da landing (SEO, og:tags)
    ├── components/
    │   ├── landing/          # TODOS os blocos da landing
    │   │   ├── Nav.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Stats.tsx
    │   │   ├── HowItWorks.tsx
    │   │   ├── EarningsTable.tsx
    │   │   ├── EventTypes.tsx
    │   │   ├── WhyPicJoy.tsx
    │   │   ├── SocialProof.tsx
    │   │   ├── UrgencyBanner.tsx
    │   │   ├── SignupForm.tsx   # formulário principal
    │   │   └── Footer.tsx
    │   └── ui/               # shadcn/ui (botões, inputs, etc.)
    ├── assets/               # imagens geradas (hero, eventos)
    ├── hooks/
    └── lib/
```

---

## 3. Instalação local

Requer **Node.js 20+**.

```bash
# 1. Instalar dependências
bun install        # OU: npm install / pnpm install

# 2. Rodar em desenvolvimento
bun run dev        # OU: npm run dev

# 3. Build de produção
bun run build      # OU: npm run build

# 4. Preview do build
bun run start      # OU: npm run start
```

A landing abre em `http://localhost:5173` (ou porta indicada no terminal).

---

## 4. Variáveis de ambiente (.env)

**Esta landing NÃO usa nenhuma variável de ambiente.** Não há `.env` necessário.

Caso integre backend, crie um `.env` na raiz com prefixo `VITE_` para variáveis públicas:
```
VITE_API_URL=https://sua-api.com
VITE_GA_ID=G-XXXXXXXXXX
```

---

## 5. Formulário de inscrição

Arquivo: `src/components/landing/SignupForm.tsx`

**Campos:** nome, e-mail, WhatsApp, Instagram, cidade, tipo de fotógrafo (inclui "Não sou fotógrafo"), já possui eventos, eventos por mês, evento que pode indicar.

**Estado atual:** submissão é **client-side apenas** — apenas mostra um `toast.success` e dá `console.log(data)`. Não há backend, CRM, webhook ou banco de dados configurado.

### Como conectar a um backend / CRM / webhook

Edite a função `onSubmit` em `SignupForm.tsx`:

```ts
const onSubmit = async (data: FormData) => {
  await fetch("https://SEU-WEBHOOK.com/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  toast.success("Inscrição enviada!");
  reset();
};
```

Exemplos de destinos:
- **Webhook genérico** (Zapier, Make, n8n): cole a URL do webhook
- **HubSpot / RD Station / ActiveCampaign**: use a API REST de Contacts
- **Google Sheets**: via Apps Script Web App ou SheetDB
- **Supabase / Firebase**: SDK do cliente
- **Mailchimp / ConvertKit**: API de subscribers

---

## 6. Banco de dados

**Não há banco de dados.** A landing é 100% estática no frontend. Adicione conforme necessidade ao integrar o formulário.

---

## 7. APIs / Integrações

**Nenhuma API externa configurada.** Apenas Google Fonts (CSS público, sem chave).

---

## 8. SEO

Configurado em:
- `src/routes/__root.tsx` — meta tags globais, fontes
- `src/routes/index.tsx` — `head()` da home com `title`, `description`, `og:title`, `og:description`, `og:type`, `twitter:card`

Para adicionar `og:image`, coloque uma imagem em `src/assets/` e adicione no `head()` de `index.tsx`:
```ts
{ property: "og:image", content: "https://seudominio.com/og-image.jpg" }
```

---

## 9. Pixels e Analytics

**Nenhum pixel instalado atualmente.** Para adicionar Google Analytics, Meta Pixel, GTM, edite `src/routes/__root.tsx` e inclua os scripts no `<head>` via `head().scripts` ou diretamente no `RootShell`:

```tsx
function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXX');
        `}} />
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){...}; fbq('init', 'SEU_PIXEL_ID'); fbq('track', 'PageView');
        `}} />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}
```

---

## 10. Responsividade

Mobile-first com Tailwind. Breakpoints padrão (`md:`, `lg:`) já aplicados em todos os componentes da landing. Testado em 375px, 768px, 1280px+.

---

## 11. Deploy — opções recomendadas

### Opção A — Vercel (mais simples, recomendado)
1. Suba o projeto para um repositório GitHub
2. Importe em https://vercel.com/new
3. Framework preset: **Vite** (ou **Other** se detectar TanStack Start)
4. Build command: `bun run build` ou `npm run build`
5. Output directory: `dist` (ou `.output/public` se SSR)
6. Deploy

### Opção B — Netlify
1. `npm run build`
2. Publique a pasta `dist/` (drag & drop ou via CLI `netlify deploy --prod --dir=dist`)

### Opção C — Cloudflare Pages
1. Conecte o repo
2. Build: `npm run build` — Output: `dist`

### Opção D — Servidor próprio (VPS / Apache / Nginx)
1. `npm run build` localmente
2. Copie a pasta `dist/` para o servidor
3. Aponte o Nginx/Apache para servir os arquivos estáticos
4. Exemplo Nginx:
```nginx
server {
  listen 80;
  server_name seudominio.com;
  root /var/www/picjoy/dist;
  index index.html;
  location / { try_files $uri $uri/ /index.html; }
}
```

### Converter para SPA pura (mais portátil)
Se preferir Vite + React puro (sem TanStack Start/SSR), o conteúdo de `src/components/landing/` é 100% reutilizável — basta criar um projeto Vite + React, copiar `src/components/`, `src/assets/`, `src/styles.css`, `src/lib/utils.ts` e renderizar `<Index />` em `App.tsx`.

---

## 12. Domínio

Configure no provedor escolhido (Vercel/Netlify/Cloudflare):
- Adicione o domínio nas configurações do projeto
- Configure os registros DNS (A / CNAME) conforme o provedor indicar
- HTTPS é automático em todas as opções acima

---

## 13. Dependências principais (ver `package.json` completo)

- `react`, `react-dom` (v19)
- `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/react-query`
- `tailwindcss` v4, `@tailwindcss/vite`
- `react-hook-form`, `@hookform/resolvers`, `zod`
- `lucide-react`, `sonner`, `framer-motion`
- shadcn/ui (Radix UI primitives)

---

## 14. Checklist de migração

- [ ] Substituir `bun.lock` por `package-lock.json` se for usar npm
- [ ] Conectar `SignupForm.onSubmit` ao seu CRM/webhook
- [ ] Adicionar pixels (GA, Meta, GTM) no `__root.tsx`
- [ ] Adicionar `og:image` real em `index.tsx`
- [ ] Configurar domínio + HTTPS no provedor de deploy
- [ ] Remover `wrangler.jsonc` e `src/server.ts` se NÃO for usar Cloudflare Workers
- [ ] Testar formulário end-to-end após conectar backend

---

**Suporte:** todo o código é padrão React + TypeScript + Tailwind, sem nenhuma API proprietária da Lovable. Qualquer desenvolvedor React consegue dar manutenção.
