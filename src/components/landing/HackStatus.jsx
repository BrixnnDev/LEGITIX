import { motion } from "framer-motion";
import { GiFireAce } from "react-icons/gi";
import { SiFortnite } from "react-icons/si";
import { FaGamepad, FaCrosshairs } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

const hacks = [
  { name: "Free Fire", icon: GiFireAce, color: "#ff6600", status: "activo", label: "Funcionando" },
  { name: "Fortnite", icon: SiFortnite, color: "#00aaff", status: "activo", label: "Funcionando" },
  { name: "Call of Duty", icon: FaCrosshairs, color: "#8b4513", status: "mantenimiento", label: "En mantenimiento" },
  { name: "Blood Strike", icon: FaGamepad, color: "#ff0044", status: "desactivado", label: "Desactivado" },
  { name: "Anti-Ban Pro", icon: FiShield, color: "#00cc88", status: "activo", label: "Funcionando" },
];

const statusStyles = {
  activo: "bg-green-500/10 border-green-500/30 text-green-400",
  desactivado: "bg-red-500/10 border-red-500/30 text-red-400",
  mantenimiento: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
};

const statusDots = {
  activo: "bg-green-500",
  desactivado: "bg-red-500",
  mantenimiento: "bg-yellow-500",
};

export default function HackStatus() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-white text-center mb-10"
      >
        Estado de los Hacks
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {hacks.map((hack, i) => {
          const Icon = hack.icon;
          return (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#12121a] border border-white/5 rounded-2xl p-5 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl"
                style={{ background: `${hack.color}15`, color: hack.color }}
              >
                <Icon />
              </div>
              <h3 className="text-white font-semibold text-sm mb-3">{hack.name}</h3>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[hack.status]}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusDots[hack.status]}`} />
                {hack.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
