import { useState } from "react";
import { FaBolt } from "react-icons/fa";
import { hackGames } from "../data/products";
import GameCard from "../components/products/GameCard";
import GameCarousel from "../components/products/GameCarousel";
import SearchBar from "../components/ui/SearchBar";
import SectionTitle from "../components/ui/SectionTitle";
import HackStatus from "../components/landing/HackStatus";
import UpcomingSection from "../components/products/UpcomingSection";

export default function Hacks() {
  const [search, setSearch] = useState("");
  const filtered = hackGames.filter(
    (g) => g.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={FaBolt}
          title="Hacks Indetectables"
          subtitle="Selecciona un juego para ver los hacks disponibles."
        />

        <GameCarousel basePath="/hacks" />
        <SearchBar value={search} onChange={setSearch} placeholder="Buscar juegos..." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((game, i) => (
            <GameCard key={game.id} game={game} basePath="/hacks" index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No se encontraron juegos.</p>
        )}

        <div className="mt-20">
          <HackStatus />
        </div>
        <UpcomingSection />
      </div>
    </div>
  );
}
