import { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const images = [
  { id: "ff", label: "Free Fire", img: "", color: "#ff6600", emoji: "🔥" },
  { id: "fort", label: "Fortnite", img: "", color: "#00aaff", emoji: "🎯" },
  { id: "cod", label: "Call of Duty", img: "", color: "#8b4513", emoji: "🎮" },
  { id: "bs", label: "Blood Strike", img: "", color: "#ff0044", emoji: "⚔️" },
  { id: "val", label: "Valorant", img: "", color: "#ff4455", emoji: "🔫" },
  { id: "lol", label: "League of Legends", img: "", color: "#c49a3c", emoji: "🏆" },
];

export default function GameCarousel({ basePath }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-10">
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#12121a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
      >
        <FiChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((item) => (
          <Link key={item.id} to={`${basePath}/${item.id}`}>
            <motion.div
              whileHover={{ y: -4 }}
              className="shrink-0 w-52 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-white/10 transition-all cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)` }}
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-sm font-medium text-white">{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#12121a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
