import { useCallback, useMemo, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ArticleModal } from "./components/ArticleModal";
import { Hero } from "./components/sections/Hero";
import { LatestArticles } from "./components/sections/LatestArticles";
import { TrendingTopics } from "./components/sections/TrendingTopics";
import type { Article } from "./data/content";
import { tagStats } from "./data/content";
import { scrollToId } from "../lib/scrollToId";

export default function App() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const stats = useMemo(() => tagStats(), []);

  const changeTag = useCallback((tag: string | null) => {
    setActiveTag(tag);
    if (tag !== null) {
      scrollToId("arquivo");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <TrendingTopics stats={stats} activeTag={activeTag} onChangeTag={changeTag} />
        <LatestArticles onReadArticle={setOpenArticle} activeTag={activeTag} onChangeTag={changeTag} />
      </main>
      <Footer />
      <ArticleModal article={openArticle} onClose={() => setOpenArticle(null)} />
    </div>
  );
}
