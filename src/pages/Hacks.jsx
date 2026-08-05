import { FaBolt } from "react-icons/fa";
import { hackGames } from "../data/products";
import GameCard from "../components/products/GameCard";
import PageHeader from "../components/ui/PageHeader";
import HackStatus from "../components/landing/HackStatus";
import UpcomingSection from "../components/products/UpcomingSection";

export default function Hacks() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        icon={FaBolt}
        title="Hacks Indetectables"
        subtitle="Selecciona un juego para ver los hacks disponibles."
        videoSrc="/videos/video3.mp4"
        fullScreen
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hackGames.map((game, i) => (
            <GameCard key={game.id} game={game} basePath="/hacks" index={i} />
          ))}
        </div>

        <div className="mt-20">
          <HackStatus />
        </div>
        <UpcomingSection />
      </div>
    </div>
  );
}
