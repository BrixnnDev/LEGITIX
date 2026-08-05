import { useState } from "react";
import { motion } from "framer-motion";
import { FiBell } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const VIDEO_SOURCES = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
];

export default function VideoShowcase() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="video" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-80 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#12121a] shadow-2xl shadow-black/50"
        >
          <video
            src={VIDEO_SOURCES[0]}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoFailed(true)}
          />
          {videoFailed && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-purple-500/10">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <FaPlay className="text-white text-xl ml-1" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-orange-500/5 to-purple-500/5 border border-orange-500/10 rounded-3xl p-8 sm:p-10 text-center overflow-hidden">
            <img
              src="/images/Suscripcion.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/80 to-[#0a0a0f]/90 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                <FiBell className="text-2xl text-orange-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Recibe notificaciones
              </h3>
              <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto leading-relaxed">
                Suscríbete y entérate al instante cuando un hack vuelva a estar activo,
                haya nuevas actualizaciones o lleguen productos exclusivos.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  required
                  className="flex-1 bg-[#12121a] border border-white/5 rounded-xl px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/30 transition-colors"
                />
                <button
                  type="submit"
                  className={`px-7 py-3.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                    subscribed
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
                  }`}
                >
                  {subscribed ? "¡Suscrito!" : "Suscribirse"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
