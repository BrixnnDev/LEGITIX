import { useParams, useLocation, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { products, accountGames, hackGames } from "../data/products";
import ProductCard from "../components/products/ProductCard";

export default function GameProducts() {
  const { game } = useParams();
  const { pathname } = useLocation();
  const category = pathname.startsWith("/cuentas") ? "cuentas" : "hacks";

  const games = category === "cuentas" ? accountGames : hackGames;
  const gameInfo = games.find((g) => g.id === game);
  const gameProducts = products.filter(
    (p) => p.category === category && p.game === game
  );

  const basePath = `/${category}`;
  const title = gameInfo ? gameInfo.label : game;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={basePath}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8"
        >
          <FiArrowLeft />
          Volver a {category === "cuentas" ? "cuentas" : "hacks"}
        </Link>

        <div className="flex items-center gap-4 mb-10">
          {gameInfo && (
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${gameInfo.color}15`, color: gameInfo.color }}
            >
              <gameInfo.icon />
            </div>
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white capitalize">
              {title}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {gameProducts.length} producto{gameProducts.length !== 1 ? "s" : ""} disponible{gameProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {gameProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No hay productos disponibles para este juego aún.</p>
            <Link
              to={basePath}
              className="inline-block mt-4 text-orange-400 hover:text-orange-300 transition-colors"
            >
              Explorar otros juegos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gameProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
