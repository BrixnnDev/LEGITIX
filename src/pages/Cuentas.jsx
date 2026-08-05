import { GiFireAce } from "react-icons/gi";
import { accountGames } from "../data/products";
import GameCard from "../components/products/GameCard";
import PageHeader from "../components/ui/PageHeader";

export default function Cuentas() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        icon={GiFireAce}
        title="Cuentas Premium"
        subtitle="Selecciona un juego para ver las cuentas disponibles."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {accountGames.map((game, i) => (
            <GameCard key={game.id} game={game} basePath="/cuentas" index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
