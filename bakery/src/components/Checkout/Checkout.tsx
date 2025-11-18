import { useCart } from "../../context/useCart";
import "./checkout.css";
export default function Checkout() {
  const { items, preTaxTotal } = useCart();

  const TAX_RATE = 0.0875; // 8.75% sales tax
  const taxAmount = preTaxTotal * TAX_RATE;
  const totalAmount = preTaxTotal + taxAmount;

  if (items.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Add some delicious items to your cart to checkout!</p>
        <a href="#menu" className="btn order-btn">
          Browse Menu
        </a>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h2>Order Summary</h2>

        <div className="checkout-items">
          {items.map((item, index) => (
            <div className="checkout-item" key={`${item.title}-${index}`}>
              <div className="checkout-item-info">
                <h4>{item.title}</h4>
                <p className="checkout-item-qty">Qty: {item.quantity}</p>
              </div>
              <div className="checkout-item-price">
                ${item.totalPrice.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="checkout-totals">
          <div className="checkout-row">
            <span>Subtotal:</span>
            <span>${preTaxTotal.toFixed(2)}</span>
          </div>
          <div className="checkout-row">
            <span>Tax (8.75%):</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="checkout-row checkout-total">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="checkout-promo">
          <div className="promo-icon">💻</div>
          <div className="promo-content">
            <h3>Want a similar website?</h3>
            <p>
              Check out <strong>Verdant Webworks</strong> for custom web design
              and development services.
            </p>
            <a
              href="https://verdant-webworks.vercel.app/"
              target="_blank"
              className="btn order-btn promo-btn"
            >
              Visit Verdant Webworks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
