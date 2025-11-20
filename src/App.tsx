import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContactInfo from "./components/ContactInfo";
import MenuList, {
  BakedGoodsGallery,
  CoffeeGallery,
  DessertGallery,
} from "./components/MenuList/MenuList";
import CartView from "./components/Cart/CartView";
import Hero from "./components/Hero/Hero";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

import "./styles/styles.css";
import "./styles/responsive.css";

import { useState } from "react";
import ContactForm from "./components/Forms/ContactForm";
import { Footer } from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("home");

  const handleCheckout = () => {
    setCurrentSection("checkout");
    setShowCart(false);
  };

  const handleBackToMenu = () => {
    setCurrentSection("menu");
  };

  return (
    <CartProvider>
      <Navbar
        onNavClick={(section) => setCurrentSection(section)}
        onCartClick={() => setShowCart((v) => !v)}
      />
      <main>
        {currentSection === "home" && (
          <>
            <Hero goToMenu={() => setCurrentSection("menu")} />
            <section id="gallery">
              <h2>Featured Desserts</h2>
              <p className="sub-heading">
                All of our delicious desserts are baked fresh daily in house,
                using premium ingredients.
              </p>
              <DessertGallery />

              <h2>Featured Drinks</h2>
              <p className="sub-heading">
                All of our coffee is ethically sourced from premium growers
                around the world. Beans are roasted and ground fresh daily.
              </p>
              <CoffeeGallery />

              <h2>Featured Baked Goods</h2>
              <p className="sub-heading">
                All of our baked goods are made fresh daily in house, using
                premium ingredients.
              </p>
              <BakedGoodsGallery />
            </section>
          </>
        )}
        {currentSection === "checkout" && (
          <section className="checkout-section">
            <button
              onClick={handleBackToMenu}
              className="btn secondary back-btn"
            >
              ← Back to Menu
            </button>
            <Checkout />
          </section>
        )}
        {currentSection === "about" && <About />}
        {currentSection === "menu" && (
          <>
            <section id="menu">
              <h2>
                Order Online <i className="fa-solid fa-truck"></i>
              </h2>
              <p className="sub-heading">
                All of our delicious desserts are baked fresh daily in house,
                using premium ingredients, and coffees are brewed to perfection
                with freshly roasted beans ground daily. Order online for
                pickup, or delivery with GrubHub and UberEats.
              </p>
              <MenuList />
            </section>
          </>
        )}
        {currentSection === "contact" && (
          <section id="contact">
            <ContactInfo />
            <ContactForm />
          </section>
        )}
        {showCart && (
          <aside id="cart" className="active">
            <CartView onCheckout={handleCheckout} />
          </aside>
        )}
      </main>
      <Footer onNavClick={(section) => setCurrentSection(section)} />
      <Toaster />
    </CartProvider>
  );
}

export default App;
