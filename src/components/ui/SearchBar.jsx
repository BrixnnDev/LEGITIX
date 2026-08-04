import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative mb-8">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Buscar productos..."}
        className="w-full bg-[#12121a] border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/30 transition-colors"
      />
    </div>
  );
}
