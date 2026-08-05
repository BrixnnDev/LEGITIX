import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiFireAce } from "react-icons/gi";
import { FaBolt, FaBoxOpen } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

export default function ProductShowcase() {
  return (
    <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <SectionTitle
        icon={FaBoxOpen}
        title="Nuestros Productos"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/cuentas">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative h-72 rounded-3xl overflow-hidden border border-orange-500/20 bg-[#12121a]"
          >
            <img
              src="/images/CuentasP.png"
              alt="Cuentas"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-orange-500/15 via-transparent to-transparent pointer-events-none" />
            <GiFireAce className="absolute -bottom-6 -right-6 text-9xl text-orange-500/10 group-hover:scale-110 transition-transform" />
          </motion.div>
        </Link>

        <Link to="/hacks">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative h-72 rounded-3xl overflow-hidden border border-purple-500/20 bg-[#12121a]"
          >
            <img
              src="/images/HackP.png"
              alt="Hacks"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-purple-500/15 via-transparent to-transparent pointer-events-none" />
            <FaBolt className="absolute -bottom-6 -right-6 text-9xl text-purple-400/10 group-hover:scale-110 transition-transform" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}