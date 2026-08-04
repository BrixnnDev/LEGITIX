import { useState } from "react";
import { motion } from "framer-motion";
import { GiFireAce } from "react-icons/gi";
import { SiFortnite } from "react-icons/si";
import { FaGamepad, FaCrosshairs } from "react-icons/fa";
import { FiShield, FiBell } from "react-icons/fi";

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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-2xl mx-auto"
      >
        <div className="relative bg-gradient-to-br from-orange-500/5 to-purple-500/5 border border-orange-500/10 rounded-3xl p-8 sm:p-10 text-center overflow-hidden">
          <img
            src="/images/Suscripcion.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/80 to-[#0a0a0f]/90 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
              <FiBell className="text-2xl text-orange-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Recibe notificaciones
            </h3>
            <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto leading-relaxed">
          Suscríbete y entérate al instante cuando un hack vuelva a estar activo,
          haya nuevas actualizaciones o lleguen productos exclusivos.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                className="flex-1 bg-[#12121a] border border-white/5 rounded-xl px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/30 transition-colors"
              />
              <button
                type="submit"
                className={`px-7 py-3.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  subscribed
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
                }`}
              >
                {subscribed ? "¡Suscrito!" : "Suscribirse"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
