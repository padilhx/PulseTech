# PulseTech

Repositório do site da **Pulse**: página inicial com artigo em destaque, área de posts e seção de tags. É um app [React](https://react.dev/) servido pelo [Vite](https://vite.dev/), com estilos em [Tailwind CSS](https://tailwindcss.com/) e animações com [Motion](https://motion.dev/).

## Como rodar o projeto

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço que o Vite mostrar no terminal (geralmente `http://localhost:5173`).

**Outros comandos úteis**

- `npm run build` — verifica os tipos com TypeScript e gera a pasta `dist` para produção.
- `npm run preview` — serve localmente a pasta `dist` para você testar o resultado do build no navegador.

Você também pode usar `pnpm` ou `yarn` no lugar do `npm`, se for o que você já usa no dia a dia.

## Onde está cada coisa

- `src/app/App.tsx` — monta a página: barra de cima, seções e rodapé.
- `src/app/data/content.ts` — textos, categorias e imagens dos cards (é aqui que você muda o conteúdo de exemplo).
- `src/app/components/` — partes reutilizáveis (por exemplo `Section`, `ArticleCard`, `ImageWithFallback`).
- `src/app/components/layout/` — `Navbar` e `Footer`.
- `src/app/components/sections/` — blocos da home (`Hero`, lista de artigos, tags).
- `src/styles/` — CSS global, Tailwind e cores básicas no `theme.css`.

O alias `@/` aponta para a pasta `src/` (definido no `vite.config.ts` e no `tsconfig.json`).
