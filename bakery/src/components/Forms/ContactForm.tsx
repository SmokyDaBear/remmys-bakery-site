import "./form.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <h3>Contact Us</h3>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" placeholder="Phone (optional)" />
      </label>
      <label>
        Message:
        <textarea name="message" rows={5} required></textarea>
      </label>
      <button type="submit" className="btn submit-btn">
        Send Message
      </button>
    </form>
  );
}
