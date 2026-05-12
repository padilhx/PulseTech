import { useEffect } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import type { Article } from "../data/content";
import { ImageWithFallback } from "./ImageWithFallback";

type ArticleModalProps = {
  article: Article | null;
  onClose: () => void;
};

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (!article) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Fechar"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl flex flex-col"
      >
        <div className="relative h-48 sm:h-56 shrink-0">
          <ImageWithFallback
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-900 hover:bg-white shadow-sm"
            aria-label="Fechar artigo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">{article.category}</span>
            <span>{article.readTime}</span>
          </div>
          <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            {article.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-4">{article.excerpt}</p>
          <div className="max-w-none space-y-4 text-gray-700 leading-relaxed text-base">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
