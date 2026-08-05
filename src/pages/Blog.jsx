import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";

const posts = [
  {
    title: "Cómo comprar cuentas Free Fire de forma segura",
    excerpt: "Guía completa para adquirir cuentas premium sin riesgos. Consejos y recomendaciones.",
    date: "15 Jul 2026",
    color: "#ff6600",
  },
  {
    title: "Los mejores hacks para Fortnite en 2026",
    excerpt: "Descubre los hacks más efectivos y seguros para Fortnite esta temporada.",
    date: "10 Jul 2026",
    color: "#00aaff",
  },
  {
    title: "Guía anti-ban: cómo proteger tu cuenta",
    excerpt: "Tips esenciales para evitar baneos al usar hacks en tus juegos favoritos.",
    date: "5 Jul 2026",
    color: "#00cc88",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={FaNewspaper}
          title="Blog"
          subtitle="Noticias, guías y tutoriales sobre cuentas premium y hacks gaming."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#12121a] border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/20 transition-all cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg"
                style={{ background: `${post.color}15`, color: post.color }}
              >
                <FiFileText />
              </div>
              <span className="text-xs text-gray-600">{post.date}</span>
              <h3 className="text-white font-semibold mt-1 mb-2 group-hover:text-orange-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
