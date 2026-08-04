import { GiFireAce } from "react-icons/gi";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <GiFireAce className="text-base text-orange-500" />
            <span className="text-sm font-bold text-white">Legitix</span>
          </div>

          <span className="text-gray-600">&copy; {new Date().getFullYear()} Legitix. Derechos reservados.</span>

          <div className="flex flex-col items-center sm:items-end gap-0.5">
            <a
              href="mailto:soporte@legitix.store"
              className="text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <FiMail className="text-xs" />
              soporte@legitix.store
            </a>
            <a href="https://brixnndev.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
              Creado por BrixnnDev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
