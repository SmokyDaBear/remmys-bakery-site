import { useState } from "react";
import { useCart } from "../../context/useCart";
import "./navbar.css";

export default function Navbar({
  onCartClick,
  onNavClick,
}: {
  onCartClick?: () => void;
  onNavClick: (section: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const { totalQuantity } = useCart();
  return (
    <nav className={`navbar ${open ? "active" : ""}`}>
      <button id="menu-button" onClick={() => setOpen((v) => !v)}>
        <div className={open ? "hamburger-icon active" : "hamburger-icon"}>
          <span />
          <span />
          <span />
        </div>
      </button>
      <ul id="navlist" className={`navlist ${open ? "active" : ""}`}>
        <li>
          <a
            onClick={() => {
              onNavClick("home");
              setOpen(false);
            }}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#menu"
            onClick={() => {
              onNavClick("menu");
              setOpen(false);
            }}
          >
            Menu
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => {
              onNavClick("contact");
              setOpen(false);
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              onNavClick("about");
              setOpen(false);
            }}
          >
            About
          </a>
        </li>
      </ul>

      <button
        id="cart-btn"
        onClick={onCartClick}
        className="btn hover-show-span cart-btn-with-badge"
        aria-label={`Cart with ${totalQuantity} item${
          totalQuantity === 1 ? "" : "s"
        }`}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <p className="cart-badge" aria-hidden>
          {totalQuantity}
        </p>
        <span className="cart-text">Cart</span>
      </button>
    </nav>
  );
}
