import heroBg from "../../assets/kneading-bw.jpg";
import logo from "../../assets/remmys-baked-goods-logo-1.png";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <img src={heroBg} alt="" aria-hidden className="hero-bg" />
      <div className="hero-content container">
        <img
          src={logo}
          width={200}
          alt="Remmy's Baked Goods Logo"
          className="logo-img"
        />
        <h1 className="hero-title cursive">Remmy's Baked Goods</h1>
        <p className="hero-subtitle">Fresh, local, and made with love.</p>
        <div className="hero-actions">
          <a href="#menu" className="btn pill-btn">
            Order Now
          </a>
          <a href="#gallery" className="btn">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
