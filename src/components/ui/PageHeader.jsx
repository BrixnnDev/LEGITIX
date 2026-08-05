import { motion } from "framer-motion";

export default function PageHeader({ icon: Icon, title, subtitle, videoSrc = "/videos/video1.mp4" }) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/20 to-[#0a0a0f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {Icon && (
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 text-3xl mb-5 border border-orange-500/20">
              <Icon />
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
