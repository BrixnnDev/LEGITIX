import { motion } from "framer-motion";
import { GiFireAce } from "react-icons/gi";
import { FiShield, FiZap, FiUsers, FiClock } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    icon: FiShield,
    title: "100% Seguro",
    description: "Todos nuestros productos son verificados y garantizados. Compra con total confianza.",
    color: "#00cc88",
  },
  {
    icon: FiZap,
    title: "Entrega Inmediata",
    description: "Recibe tu producto por key instantáneamente después de la compra. Sin esperas.",
    color: "#ff6600",
  },
  {
    icon: FiUsers,
    title: "Soporte 24/7",
    description: "Atención al cliente las 24 horas del día, los 7 días de la semana.",
    color: "#00aaff",
  },
  {
    icon: FiClock,
    title: "Actualizaciones",
    description: "Hacks actualizados constantemente para mantenerte siempre un paso adelante.",
    color: "#cc00ff",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={GiFireAce}
          title="¿Qué es Legitix?"
          subtitle="Somos la plataforma líder en venta de cuentas gaming premium y hacks indetectables para los juegos más populares."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl transition-transform group-hover:scale-110"
                  style={{ background: `${feature.color}15`, color: feature.color }}
                >
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/10 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            "Legitix nació para ofrecer a los gamers acceso a contenido premium y herramientas
            competitivas al mejor precio, con la seguridad y rapidez que mereces."
          </p>
        </motion.div>
      </div>
    </section>
  );
}