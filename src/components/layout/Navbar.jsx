import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GiFireAce } from "react-icons/gi";
import { useCart } from "../../context/CartContext";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "about", label: "Nosotros" },
  { id: "productos", label: "Productos" },
];

export default function Navbar() {
  const { items, total, setIsOpen } = useCart();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    if (pathname !== "/" && id !== "inicio") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      if (id === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <GiFireAce className="text-2xl sm:text-3xl text-orange-500" />
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Legitix
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-3 py-2 text-sm rounded-lg text-white hover:text-orange-400 transition-colors"
              >
                {s.label}
              </button>
            ))}
            <Link
              to="/hacks"
              className="px-3 py-2 text-sm rounded-lg text-white hover:text-orange-400 transition-colors"
            >
              Hacks
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm rounded-lg text-white hover:text-orange-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contacto"
              className="px-3 py-2 text-sm rounded-lg text-white hover:text-orange-400 transition-colors"
            >
              Contacto
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-sm text-white">
              <span className="text-orange-400 font-medium">${total.toFixed(2)}</span>
              <span className="text-gray-400">USD</span>
            </div>

            <FiUser className="text-lg text-white hover:text-orange-400 cursor-pointer transition-colors" />

            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiShoppingCart className="text-xl text-white" />
              {items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {items.length}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
