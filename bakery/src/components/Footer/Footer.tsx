import "./footer.css";
import logo from "../../assets/remmys-baked-goods-logo-1.png";
export function Footer({
  onNavClick,
}: {
  onNavClick: (section: string) => void;
}) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="grid-section">
          <img
            src={logo}
            width={200}
            alt="Remmy's Baked Goods Logo"
            className="logo-img"
          />
          <h3 className="cursive title">Remmy's Baked Goods</h3>
          <a href="tel:9181234567">
            <i className="fa-solid fa-phone" /> 918-123-4567
          </a>
          <a href="mailto:remmybakedgoods@gmail.com">
            <i className="fa-solid fa-envelope" /> remmybakedgoods@gmail.com
          </a>
        </div>
        <div className="grid-section">
          <h3 className="cursive">Follow Us</h3>
          <a target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook" /> Facebook
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram" /> Instagram
          </a>
        </div>
        <div className="grid-section">
          <h3 className="cursive">Quick Links</h3>
          <a onClick={() => onNavClick("menu")}>Menu</a>
          <a onClick={() => onNavClick("home")}>Gallery</a>
          <a onClick={() => onNavClick("contact")}>Contact</a>
        </div>
        <div className="grid-section">
          <h3 className="cursive">Location</h3>
          <p>123 Bakery Lane</p>
          <p>Tulsa, OK 74104</p>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()} Remmy's Baked Goods. All rights reserved.
      </p>
      <p>
        Want your own website?{" "}
        <a href="https://verdant-webworks.vercel.app/">
          Visit Verdant Webworks
        </a>
      </p>
    </footer>
  );
}
