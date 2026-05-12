import { Section, SectionHeading } from "../Section";
import type { TagStat } from "../../data/content";

type TrendingTopicsProps = {
  stats: TagStat[];
  activeTag: string | null;
  onChangeTag: (tag: string | null) => void;
};

export function TrendingTopics({ stats, activeTag, onChangeTag }: TrendingTopicsProps) {
  return (
    <Section id="tags" className="py-12 md:py-16 border-y border-gray-200/80" muted>
      <SectionHeading
        title="Tags do arquivo"
        description="Filtre os posts por etiqueta. As mesmas tags aparecem em cada card, abaixo do resumo."
      />

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onChangeTag(null)}
          className={`inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
            activeTag === null
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
          }`}
        >
          Todos
        </button>
        {stats.map(({ tag, count }) => {
          const selected = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onChangeTag(tag)}
              className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              <span>{tag}</span>
              <span
                className={`tabular-nums text-xs ${
                  selected ? "text-gray-300" : "text-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
