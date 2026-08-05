import { motion } from "framer-motion";
import { accountGames, hackGames } from "../../data/products";

const games = [
  ...accountGames,
  ...hackGames,
].filter((g, i, arr) => arr.findIndex((x) => x.id === g.id) === i);

export default function GameMarquee() {
  return (
    <div className="relative py-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-2xl sm:text-3xl font-bold text-white mb-8"
      >
        Juegos disponibles
      </motion.h2>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max marquee-track gap-4 pr-4">
          {[...games, ...games].map((game, i) => {
            const Icon = game.icon;
            return (
              <div
                key={`${game.id}-${i}`}
                className="flex items-center gap-3 bg-[#12121a] border border-white/5 rounded-2xl px-6 py-4 hover:border-white/15 transition-colors"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${game.color}15`, color: game.color }}
                >
                  <Icon />
                </span>
                <span className="text-white font-semibold whitespace-nowrap">{game.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
