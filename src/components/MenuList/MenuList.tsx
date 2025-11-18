import { useMemo, useState } from "react";
import { bakedGoods, coffees, deserts, type MenuItem } from "../../data/menu";
import { useCart } from "../../context/useCart";
import fallbackImg from "../../assets/banana-bread.jpg";
import "./menu.css";

function CardMini({ item }: { item: MenuItem }) {
  const image = item.image || fallbackImg;
  return (
    <div className="portfolio-card mini" data-tag={item.title}>
      <div className="card-body">
        <img src={image} alt={`${item.title}`} />
        <div className="card-popup-box">
          <h3>{item.title}</h3>
          <div>{item.description}</div>
        </div>
      </div>
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState<number>(1);

  return (
    <div className="menu-item">
      <h3>{item.title}</h3>
      <div>
        <CardMini item={item} />
      </div>
      <p className="menu-item-price">Price: ${item.price.toFixed(2)} each</p>
      <label className="qty-container">
        Quantity -
        <button
          className="qty-btn"
          onClick={() => setQty((prev) => Math.max(1, prev - 1))}
        >
          −
        </button>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
        />
        <button className="qty-btn" onClick={() => setQty((prev) => prev + 1)}>
          +
        </button>
      </label>
      <button
        className="add-to-cart btn pill-btn"
        onClick={() => addItem(item, qty)}
      >
        Add to Cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
}

export default function MenuList() {
  type Category = "all" | "drinks" | "desserts" | "baked goods";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const baseList = useMemo(() => {
    if (category === "drinks") return coffees;
    if (category === "desserts") return deserts;
    if (category === "baked goods") return bakedGoods;
    return [...coffees, ...deserts, ...bakedGoods];
  }, [category]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return baseList;
    return baseList.filter((item) => item.title.toLowerCase().includes(q));
  }, [baseList, query]);

  return (
    <div>
      <div className="menu-controls">
        <div
          className="menu-filter"
          role="tablist"
          aria-label="Filter by category"
        >
          <button
            className={`filter-btn ${category === "all" ? "active" : ""}`}
            role="tab"
            aria-selected={category === "all"}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${category === "drinks" ? "active" : ""}`}
            role="tab"
            aria-selected={category === "drinks"}
            onClick={() => setCategory("drinks")}
          >
            Drinks
          </button>
          <button
            className={`filter-btn ${category === "desserts" ? "active" : ""}`}
            role="tab"
            aria-selected={category === "desserts"}
            onClick={() => setCategory("desserts")}
          >
            Desserts
          </button>
          <button
            className={`filter-btn ${
              category === "baked goods" ? "active" : ""
            }`}
            role="tab"
            aria-selected={category === "baked goods"}
            onClick={() => setCategory("baked goods")}
          >
            Bakery
          </button>
        </div>
        <div className="menu-search">
          <input
            type="search"
            placeholder="Search by name…"
            aria-label="Search menu by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="menu-empty">No items match your search.</div>
      ) : (
        <div id="full-menu" className="menu-list">
          {filtered.map((item) => (
            <MenuItemCard item={item} key={item.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export function DessertGallery() {
  return (
    <div id="slideshow-one" className="gallery">
      {deserts.map((item) => (
        <div className="portfolio-card" data-tag={item.title} key={item.title}>
          <div className="card-body">
            <img src={item.image || fallbackImg} alt="desert icon" />
            <div className="card-popup-box">
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CoffeeGallery() {
  return (
    <div id="slideshow-two" className="gallery">
      {coffees.map((item) => (
        <div className="portfolio-card" data-tag={item.title} key={item.title}>
          <div className="card-body">
            <img src={item.image || fallbackImg} alt="coffee icon" />
            <div className="card-popup-box">
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BakedGoodsGallery() {
  return (
    <div id="slideshow-three" className="gallery">
      {bakedGoods.map((item) => (
        <div className="portfolio-card" data-tag={item.title} key={item.title}>
          <div className="card-body">
            <img src={item.image || fallbackImg} alt="baked good icon" />
            <div className="card-popup-box">
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StaticMenuList() {
  const fullMenu = useMemo(() => [...coffees, ...deserts], []);
  return (
    <div id="static-menu" className="menu-list static-menu">
      {fullMenu.map((item) => (
        <div className="menu-item static" key={item.title}>
          <h3>{item.title}</h3>
          <p className="menu-item-price">
            Price: ${item.price.toFixed(2)} each
          </p>
          <p className="menu-item-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
