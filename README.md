# NEWS IA — Portal inteligente de notícias

Interface editorial premium criada com Next.js 15, React 19 e uma arquitetura preparada para IA nativa, SEO avançado, monetização e escala global.

## Stack proposta

- **Frontend:** Next.js App Router, React, Framer Motion, CSS responsivo inspirado em Tailwind/ShadCN, Zustand e TanStack Query-ready.
- **Backend:** Next.js API Routes, Supabase/Firebase, Redis cache e Cloudflare CDN.
- **Banco:** PostgreSQL recomendado, com alternativa MongoDB Atlas.
- **IA:** OpenAI API para resumos, títulos SEO, tags, embeddings e assistente contextual.
- **Hospedagem:** Vercel + Cloudflare, com analytics via PostHog e GA4.

## Experiência implementada

- Header sticky com logo, menu, busca, login, alerta, social-ready e alternância de dark mode persistente.
- Menu horizontal de categorias com estado ativo e hover animation.
- Hero com destaque editorial, overlay gradient, CTA e indicação de vídeo autoplay silencioso.
- Feed de últimas notícias em cards responsivos, pronto para infinite scroll/lazy loading.
- Destaques do dia com abas de mais lidas, tendências, exclusivas, IA recomenda e patrocinadas.
- Painel de IA com recursos editoriais: TL;DR, áudio narrado, SEO score e curadoria automática.
- Blocos de monetização, vídeos/podcasts, newsletter e footer institucional.
- Metadata com OpenGraph, Twitter Card, JSON-LD e manifest PWA.

## Rodando localmente

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run typecheck
npm run build
```
