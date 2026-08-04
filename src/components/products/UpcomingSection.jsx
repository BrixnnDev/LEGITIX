import { motion } from "framer-motion";
import { GiShadowGrasp } from "react-icons/gi";
import { accountGames } from "../../data/products";
import SectionTitle from "../ui/SectionTitle";

export default function UpcomingSection() {
  const coming = accountGames.filter((g) => g.coming);

  return (
    <section id="proximamente" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={GiShadowGrasp}
          title="Próximamente"
          subtitle="Estamos trabajando para traerte cuentas de más juegos. ¡Mantente atento!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coming.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#12121a] border border-orange-500/10 rounded-2xl p-6 text-center hover:border-orange-500/20 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl transition-transform group-hover:scale-110"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  <Icon />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />
    </section>
  );
}