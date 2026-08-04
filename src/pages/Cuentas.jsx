import { useState } from "react";
import { GiFireAce } from "react-icons/gi";
import { accountGames } from "../data/products";
import GameCard from "../components/products/GameCard";
import GameCarousel from "../components/products/GameCarousel";
import SearchBar from "../components/ui/SearchBar";
import SectionTitle from "../components/ui/SectionTitle";

export default function Cuentas() {
  const [search, setSearch] = useState("");
  const filtered = accountGames.filter(
    (g) => g.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={GiFireAce}
          title="Cuentas Premium"
          subtitle="Selecciona un juego para ver las cuentas disponibles."
        />

        <GameCarousel basePath="/cuentas" />
        <SearchBar value={search} onChange={setSearch} placeholder="Buscar juegos..." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((game, i) => (
            <GameCard key={game.id} game={game} basePath="/cuentas" index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No se encontraron juegos.</p>
        )}
      </div>
    </div>
  );
}
