import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiFireAce } from "react-icons/gi";
import { FaBolt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function CategoryCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-white text-center mb-10"
      >
        ¿Qué buscas hoy?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/cuentas">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <GiFireAce className="text-5xl text-orange-500 mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Cuentas Premium</h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Las mejores cuentas de Free Fire, Blood Strike y más al mejor precio.
              </p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-xl group-hover:bg-orange-600 transition-colors">
                Explorar cuentas <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        </Link>

        <Link to="/hacks">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-3xl p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <FaBolt className="text-5xl text-purple-400 mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Hacks Indetectables</h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Hacks premium con anti-ban para Free Fire, Fortnite, CoD y Blood Strike.
              </p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 text-white font-semibold rounded-xl group-hover:bg-purple-600 transition-colors">
                Ver hacks <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
