import { motion } from "motion/react";
import type { Article } from "../data/content";
import { ImageWithFallback } from "./ImageWithFallback";

type ArticleCardProps = {
  article: Article;
  index: number;
  featured?: boolean;
  onRead?: (article: Article) => void;
  /** Ao clicar numa tag do card: aplica o filtro e o pai pode rolar até o arquivo. */
  onSelectTag?: (tag: string) => void;
};

function TagPill({
  label,
  onSelect,
}: {
  label: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-100"
    >
      {label}
    </button>
  );
}

export function ArticleCard({ article, index, featured = false, onRead, onSelectTag }: ArticleCardProps) {
  const { title, excerpt, category, readTime, imageUrl, tags } = article;
  const open = () => onRead?.(article);

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <button
          type="button"
          onClick={open}
          className="group w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 rounded-3xl"
        >
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl mb-4">
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-black mb-4">
                {category}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {title}
              </h3>
              <span className="text-sm text-white/90 underline-offset-4 group-hover:underline">
                Ler mini artigo
              </span>
            </div>
          </div>
        </button>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 px-1">
            {tags.map((t) => (
              <TagPill key={t} label={t} onSelect={() => onSelectTag?.(t)} />
            ))}
          </div>
        ) : null}
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <button
        type="button"
        onClick={open}
        className="group w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 rounded-2xl"
      >
        <div className="relative h-[280px] overflow-hidden rounded-2xl mb-5">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{category}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold leading-tight group-hover:text-gray-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed line-clamp-2">{excerpt}</p>
          <span className="text-sm font-medium text-gray-900 underline-offset-4 group-hover:underline inline-block">
            Abrir leitura
          </span>
        </div>
      </button>
      {tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <TagPill key={t} label={t} onSelect={() => onSelectTag?.(t)} />
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
