# PulseTech

Repositório do site da **Pulse**: página inicial com artigo em destaque, área de posts e seção de tags. É um app [React](https://react.dev/) com [Next.js](https://nextjs.org/) e estilos em [Tailwind CSS](https://tailwindcss.com/).

## Como rodar o projeto

```bash
npm install
npm run dev
```

Depois, abra no navegador [http://localhost:3000](http://localhost:3000).

**Outros comandos úteis**

- `npm run typecheck` — verifica os tipos com TypeScript.
- `npm run build` — gera o build de produção do Next.js.
- `npm run start` — sobe o build de produção localmente.

Você também pode usar `pnpm` ou `yarn` no lugar do `npm`, se for o que você já usa no dia a dia.

## Onde está cada coisa

- `src/app/App.tsx` — monta a página: barra de cima, seções e rodapé.
- `src/app/data/content.ts` — textos, categorias e imagens dos cards (é aqui que você muda o conteúdo de exemplo).
- `src/app/components/` — partes reutilizáveis (por exemplo `Section`, `ArticleCard`, `ImageWithFallback`).
- `src/app/components/layout/` — `Navbar` e `Footer`.
- `src/app/components/sections/` — blocos da home (`Hero`, lista de artigos, tags).
- `src/styles/` — CSS global, Tailwind e cores básicas no `theme.css`.

O alias `@/` aponta para a pasta `src/` (definido no `tsconfig.json`).
