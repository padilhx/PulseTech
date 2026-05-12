import { ArticleCard } from "../ArticleCard";
import { Section, SectionHeading } from "../Section";
import type { Article } from "../../data/content";
import { articles, featuredArticle } from "../../data/content";

function matchesTag(article: Article, tag: string | null) {
  if (tag === null) return true;
  return article.tags.includes(tag);
}

type LatestArticlesProps = {
  onReadArticle: (article: Article) => void;
  activeTag: string | null;
  onChangeTag: (tag: string | null) => void;
};

export function LatestArticles({ onReadArticle, activeTag, onChangeTag }: LatestArticlesProps) {
  const showFeatured = matchesTag(featuredArticle, activeTag);
  const filteredArticles = articles.filter((a) => matchesTag(a, activeTag));
  const empty = !showFeatured && filteredArticles.length === 0;

  return (
    <div id="arquivo" className="scroll-mt-24 md:scroll-mt-28">
      {showFeatured ? (
        <Section className="pb-14 md:pb-16 pt-2 md:pt-4">
          <ArticleCard
            article={featuredArticle}
            index={0}
            featured
            onRead={onReadArticle}
            onSelectTag={onChangeTag}
          />
        </Section>
      ) : null}

      <Section className="py-14 md:py-20">
        <SectionHeading title="Últimas publicações" description="Coisas que foram saindo por aqui." />
        {activeTag ? (
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <span>Mostrando posts com</span>
            <span className="rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 font-medium text-gray-900">
              {activeTag}
            </span>
            <button
              type="button"
              onClick={() => onChangeTag(null)}
              className="rounded-md border border-gray-300 bg-white px-2.5 py-1 font-medium text-gray-800 hover:bg-gray-50"
            >
              Limpar filtro
            </button>
          </div>
        ) : null}

        {empty ? (
          <p className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center text-gray-600">
            Nenhum post com esta tag. Escolha outra em &quot;Tags do arquivo&quot; ou limpe o filtro.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                onRead={onReadArticle}
                onSelectTag={onChangeTag}
              />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
