import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiTrash2, FiShoppingCart, FiCheck } from "react-icons/fi";
import { GiFireAce } from "react-icons/gi";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { items, isOpen, total, setIsOpen, removeItem, clearItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0a0a0f] border-l border-white/5 z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                <FiShoppingCart className="text-xl text-white" />
                <h2 className="text-lg font-semibold text-white">Carrito</h2>
                {items.length > 0 && (
                  <span className="text-sm text-gray-400">({items.length})</span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <FiX className="text-xl text-gray-400" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <GiFireAce className="text-5xl text-gray-600 mb-4" />
                <p className="text-gray-400 font-medium mb-1">Carrito vacío</p>
                <p className="text-gray-600 text-sm">
                  Agrega productos para comenzar tu compra
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-3">
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <motion.div
                        key={`${item.id}-${i}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center gap-3 bg-[#12121a] rounded-xl p-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">
                            {item.name}
                          </p>
                          <p className="text-orange-400 text-sm font-bold">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(i)}
                          className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <FiTrash2 className="text-sm" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-white/5 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total</span>
                    <span className="text-xl font-bold text-white">
                      ${total.toFixed(2)} USD
                    </span>
                  </div>

                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiCheck />
                    Pagar ahora
                  </motion.button>

                  <button
                    onClick={clearItems}
                    className="w-full py-2 text-sm text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    Vaciar carrito
                  </button>

                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    Recibirás tu producto por key instantáneamente después del pago.
                    <br />
                    Compra 100% segura.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
