import { useCart } from "../../context/useCart";
import "./cart.css";

type CartViewProps = {
  onCheckout?: () => void;
};

export default function CartView({ onCheckout }: CartViewProps) {
  const { items, preTaxTotal, removeItem, updateQuantity, clear } = useCart();

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item, index) => (
            <div className="cart-item" key={`${item.title}-${index}`}>
              <div>
                <h4>{item.title}</h4>
              </div>
              <div>
                <p>${item.price.toFixed(2)} ea.</p>
              </div>
              <div className="quantity">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      index,
                      Math.max(1, Number(e.target.value) || 1)
                    )
                  }
                />
              </div>
              <div>
                <p>${item.totalPrice.toFixed(2)}</p>
              </div>
              <button
                className="btn flat-i-btn"
                onClick={() => removeItem(index)}
              >
                ✕
              </button>
            </div>
          ))}
          <div className="cart-actions">
            <button className="btn secondary" onClick={clear}>
              Clear Cart
            </button>
            {onCheckout && (
              <button className="btn order-btn" onClick={onCheckout}>
                Checkout
              </button>
            )}
          </div>
        </div>
      )}
      <div id="cart-total">
        <span>Total - $</span>
        {preTaxTotal.toFixed(2)}
      </div>
    </div>
  );
}
