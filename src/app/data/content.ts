export type Article = {
  id: string;
  title: string;
  excerpt: string;
  /** Parágrafos do mini artigo (modal). */
  body: string[];
  category: string;
  readTime: string;
  imageUrl: string;
  /** Etiquetas do post (usadas no filtro do arquivo). */
  tags: string[];
};

export type TagStat = {
  tag: string;
  count: number;
};

export const featuredArticle: Article = {
  id: "treinar-modelo-em-casa",
  title: "Treinar modelo em casa sem queimar o cartão",
  excerpt:
    "Notas sobre batch menor, mixed precision e quando vale a pena parar antes do overfit ficar óbvio.",
  body: [
    "Começar com batch grande parece economizar tempo, mas no fim você paga em memória e em debugging quando o loss explode sem explicação bonita.",
    "Mixed precision ajuda quando a GPU suporta bem; vale medir antes de assumir ganho, porque algumas camadas ficam instáveis em FP16.",
    "Um sinal simples de parar: métrica de validação piora duas épocas seguidas e o treino ainda está ‘quentinho’. Guardar checkpoint antes disso evita recomeçar do zero.",
  ],
  category: "IA",
  readTime: "12 min",
  imageUrl: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=1200",
  tags: ["Machine learning"],
};

export const articles: Article[] = [
  {
    id: "design-tokens-equipe",
    title: "Design tokens que a equipe realmente usa",
    excerpt:
      "Menos paleta bonita no Figma e mais decisão sobre nome, contraste e quem pode mudar o quê.",
    body: [
      "Token bom é o que aparece no código com o mesmo nome que o designer fala na daily. Se precisa de planilha paralela, algo já está errado.",
      "Contraste não é detalhe cosmético: escolhe quem consegue ler o produto em ônibus com sol na tela. Vale automatizar check no CI em vez de confiar só no olho.",
      "Governança pode ser simples: dono por domínio (cor, espaçamento, tipo) e mudança grande vira RFC curta, não reunião infinita.",
    ],
    category: "Design",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?w=800",
    tags: ["Design & UX"],
  },
  {
    id: "filas-producao",
    title: "Erro comum com filas em produção",
    excerpt:
      "Retry agressivo, DLQ esquecida e métrica só de ‘throughput’. Três coisas que já nos morderam.",
    body: [
      "Retry sem limite multiplica mensagem ruim e vira loop que só para quando a fila enche ou o banco cai. Backoff + jitter costuma ser o mínimo aceitável.",
      "Sem dead-letter você não sabe o que falhou de verdade: some no limbo ou vira ruído no log. DLQ com alerta simples já paga o café da manhã da equipe.",
      "Throughput alto com latência péssima é armadilha: usuário não lê ‘mensagens por segundo’, sente demora. Vale acompanhar idade da mensagem na fila.",
    ],
    category: "Backend",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=800",
    tags: ["Mensageria"],
  },
  {
    id: "edge-quando-nao-adianta",
    title: "Edge: quando não adianta empurrar tudo pro dispositivo",
    excerpt:
      "Latência importa, mas também importa bateria, atualização e o que você não quer mandar pro cliente.",
    body: [
      "Rodar modelo pesado no celular pode drenar bateria e gerar crash em aparelho velho. Nem todo ganho de latência compensa suporte infinito.",
      "Atualização de modelo no edge precisa de estratégia: versão compatível, rollback e telemetria mínima pra saber se piorou silenciosamente.",
      "Alguns dados não deveriam sair do servidor por contrato ou risco. Edge não é desculpa pra vazar informação sensível ‘só porque é local’.",
    ],
    category: "Infra",
    readTime: "9 min",
    imageUrl: "https://images.unsplash.com/photo-1775797231060-431c478767ce?w=800",
    tags: ["Edge & infra"],
  },
  {
    id: "formulario-longo",
    title: "Formulário longo sem irritar ninguém",
    excerpt:
      "Dividir em passos, salvar rascunho e mensagens de erro que dizem o que fazer, não só ‘inválido’.",
    body: [
      "Passos curtos reduzem abandono quando cada etapa tem um objetivo claro. Mostrar progresso honesto ajuda mais do que animação bonita.",
      "Rascunho salvo no servidor evita choro quando o browser fecha. LocalStorage ajuda, mas não cobre troca de dispositivo.",
      "Erro genérico é UX ruim: diga qual campo, qual regra e um exemplo válido. Isso reduz ticket no suporte sem mágica.",
    ],
    category: "UX",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?w=800",
    tags: ["Design & UX"],
  },
  {
    id: "review-codigo",
    title: "Review de código que não vira tribunal",
    excerpt:
      "Comentário no diff, assumir boa intenção e padrão mínimo escrito antes da discussão circular.",
    body: [
      "Comentário fora do diff vira ‘fulano disse’ e some contexto. No GitHub/GitLab, amarra discussão à linha certa.",
      "Padrão escrito curto (estilo de commit, quando quebrar função, teste obrigatório ou não) corta metade das brigas infinitas.",
      "Assumir boa intenção não quer dizer aceitar tudo: quer dizer perguntar antes de acusar. ‘Por que X em vez de Y?’ abre mais que ‘isso está errado’.",
    ],
    category: "Cultura",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?w=800",
    tags: ["Cultura de engenharia"],
  },
];

/** Conta quantos posts (incluindo destaque) usam cada tag. */
export function tagStats(): TagStat[] {
  const items: Article[] = [featuredArticle, ...articles];
  const map = new Map<string, number>();
  for (const a of items) {
    for (const t of a.tags) {
      map.set(t, (map.get(t) ?? 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag, "pt-BR"));
}
