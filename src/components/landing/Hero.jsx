import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VIDEO_SOURCES = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
];

const VIDEO_ID = "6x9azE7ehgM";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [failed, setFailed] = useState(0);

  const allFailed = failed >= VIDEO_SOURCES.length;

  const next = () => setIndex((i) => (i + 1) % VIDEO_SOURCES.length);

  return (
    <section id="inicio" className="relative min-h-screen flex items-start overflow-hidden pt-20 bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <img
          src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {!allFailed && (
          <video
            key={index}
            src={VIDEO_SOURCES[index]}
            autoPlay
            muted
            loop={false}
            playsInline
            preload="auto"
            className="pointer-events-none transition-opacity duration-1000"
            style={{
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.77vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              opacity: videoLoaded ? 1 : 0,
            }}
            onCanPlay={() => setVideoLoaded(true)}
            onEnded={next}
            onError={() => {
              setFailed((f) => f + 1);
              next();
            }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/25 to-[#0a0a0f]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-lg">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            El{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,102,0,0.35)]">
              arsenal definitivo
            </span>{" "}
            para tu juego
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Cuentas premium verificadas, hacks indetectables y el mejor soporte para Free Fire,
            Fortnite, Call of Duty, Blood Strike y más.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/cuentas"
              className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25"
            >
              Explorar cuentas
            </Link>
            <Link
              to="/hacks"
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Ver hacks
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
