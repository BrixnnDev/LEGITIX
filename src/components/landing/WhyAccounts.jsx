import { motion } from "framer-motion";
import { FiShield, FiZap, FiStar } from "react-icons/fi";

export default function WhyAccounts() {
  return (
    <section className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-orange-500/10 bg-gradient-to-br from-orange-500/10 to-orange-600/5"
          >
            <img
              src="/images/Cuentas.png"
              alt="Cuentas"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0f]/80 backdrop-blur-sm rounded-xl p-4 border border-orange-500/10">
              <p className="text-sm text-gray-300">+2,500 cuentas vendidas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Por qué comprar cuentas en{" "}
              <span className="text-orange-500">Legitix</span>?
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Somos la tienda más confiable para conseguir cuentas premium al mejor
              precio. Todas nuestras cuentas son verificadas antes de ser entregadas.
            </p>

            <div className="space-y-4">
              {[
                { icon: FiShield, title: "Cuentas verificadas", desc: "Cada cuenta es revisada manualmente antes de la venta." },
                { icon: FiZap, title: "Entrega inmediata", desc: "Recibes los datos de la cuenta al instante después del pago." },
                { icon: FiStar, title: "Precios competitivos", desc: "Los mejores precios del mercado con ofertas frecuentes." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />
    </section>
  );
}