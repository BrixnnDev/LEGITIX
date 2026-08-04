import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameCard({ game, basePath, index }) {
  const Icon = game.icon;
  const linkTo = game.coming ? "#" : `${basePath}/${game.id}`;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={!game.coming ? { y: -6 } : {}}
      className={`group bg-[#12121a] border border-white/5 rounded-2xl p-6 text-center ${
        game.coming ? "opacity-60" : "hover:border-orange-500/20 transition-all"
      }`}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-transform group-hover:scale-110"
        style={{ background: `${game.color}15`, color: game.color }}
      >
        <Icon />
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">{game.label}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{game.desc}</p>

      {game.coming ? (
        <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium">
          Próximamente
        </span>
      ) : (
        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium">
          {game.count} producto{game.count !== 1 ? "s" : ""}
        </span>
      )}
    </motion.div>
  );

  if (game.coming) {
    return content;
  }

  return <Link to={linkTo}>{content}</Link>;
}
