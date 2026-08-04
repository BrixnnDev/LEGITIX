import { motion } from "framer-motion";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product, index }) {
  const { addItem } = useCart();
  const IconComponent = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-all"
    >
      {product.badge && (
        <span className="absolute -top-2.5 right-4 px-3 py-0.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/20">
          {product.badge}
        </span>
      )}

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-2xl transition-transform group-hover:scale-110"
        style={{ background: `${product.color}15`, color: product.color }}
      >
        <IconComponent />
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

      <ul className="space-y-1.5 mb-5">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
            <FiCheck className="text-green-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <span className="text-2xl font-bold text-white">
          ${product.price}
          <span className="text-sm font-normal text-gray-500 ml-1">USD</span>
        </span>
        <motion.button
          onClick={() => addItem(product)}
          className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium rounded-xl hover:bg-orange-500/20 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiShoppingCart />
          Comprar
        </motion.button>
      </div>
    </motion.div>
  );
}
