import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "../../../lib/scrollToId";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24 md:scroll-mt-28 pt-32 pb-16 md:pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Artigos e notas
            <br />
            de trabalho real
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Coisas que escrevemos sobre produto, código e o trabalho de manter software no ar.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              type="button"
              onClick={() => scrollToId("arquivo")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Ver o que tem de novo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
