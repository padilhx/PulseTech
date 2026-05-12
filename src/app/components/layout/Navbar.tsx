import { useState } from "react";
import { motion } from "motion/react";
import { Menu, Search, X } from "lucide-react";
import { scrollToId } from "../../../lib/scrollToId";

const links = [
  { hash: "arquivo", label: "Arquivo" },
  { hash: "tags", label: "Tags" },
  { hash: "sobre", label: "Sobre" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (hash: string) => {
    scrollToId(hash);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 md:gap-12 min-w-0">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("inicio");
            }}
            className="text-2xl font-bold tracking-tight text-gray-900 shrink-0 hover:opacity-80 transition-opacity"
          >
            Pulse
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map(({ hash, label }) => (
              <a
                key={hash}
                href={`#${hash}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(hash);
                }}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={() => navigateTo("arquivo")}
            className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Ir para o arquivo de artigos"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button
            type="button"
            className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden border-t border-gray-100 bg-white/95 px-6 py-4 flex flex-col gap-1">
          {links.map(({ hash, label }) => (
            <a
              key={hash}
              href={`#${hash}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(hash);
              }}
              className="py-3 text-base text-gray-800 border-b border-gray-50 last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.nav>
  );
}
