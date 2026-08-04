import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheck } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-start justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle
          icon={FaHeadset}
          title="Contacto"
          subtitle="¿Tienes dudas o problemas? Escríbenos y te respondemos en menos de 24 horas."
        />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Nombre</label>
              <input
                type="text"
                required
                className="w-full bg-[#12121a] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/30 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Correo</label>
              <input
                type="email"
                required
                className="w-full bg-[#12121a] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/30 transition-colors"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Asunto</label>
            <select className="w-full bg-[#12121a] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/30 transition-colors">
              <option value="soporte">Soporte técnico</option>
              <option value="ventas">Consulta de ventas</option>
              <option value="reclamo">Reclamo o problema</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Mensaje</label>
            <textarea
              required
              rows={4}
              className="w-full bg-[#12121a] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/30 transition-colors resize-none"
              placeholder="Escribe tu mensaje..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={sent}
            whileHover={{ scale: sent ? 1 : 1.02 }}
            whileTap={{ scale: sent ? 1 : 0.98 }}
            className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
              sent
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
            }`}
          >
            {sent ? (
              <>
                <FiCheck /> Mensaje enviado
              </>
            ) : (
              <>
                <FiSend /> Enviar mensaje
              </>
            )}
          </motion.button>

          <div className="flex items-center justify-center gap-6 pt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FiMail className="text-xs" /> soporte@legitix.store
            </span>
            <span className="flex items-center gap-1.5">
              Respuesta en 24h
            </span>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
