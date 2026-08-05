import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import Cuentas from "./pages/Cuentas";
import Hacks from "./pages/Hacks";
import Blog from "./pages/Blog";
import GameProducts from "./pages/GameProducts";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#0a0a0f]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/cuentas/:game" element={<GameProducts />} />
            <Route path="/hacks" element={<Hacks />} />
            <Route path="/hacks/:game" element={<GameProducts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
          <Cart />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
