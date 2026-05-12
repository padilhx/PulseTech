import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { hash: "sobre", label: "Sobre" },
  { hash: "arquivo", label: "Artigos" },
  { hash: "inicio", label: "Topo" },
  { hash: "tags", label: "Tags" },
] as const;

const socials = [
  { href: "#", label: "Twitter", Icon: Twitter },
  { href: "#", label: "GitHub", Icon: Github },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
] as const;

export function Footer() {
  return (
    <footer id="sobre" className="scroll-mt-24 md:scroll-mt-28 py-16 px-6 border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Pulse</h2>
            <p className="text-gray-600 leading-relaxed">
              Newsletter às vezes, posts quando dá. Sem promessa de viralizar nada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map(({ hash, label }) => (
                <li key={label}>
                  <a href={`#${hash}`} className="text-gray-600 hover:text-black transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Pulse. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
