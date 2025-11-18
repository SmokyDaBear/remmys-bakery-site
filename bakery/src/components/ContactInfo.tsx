export default function ContactInfo() {
  return (
    <div className="flex-column contact">
      <h3 className="cursive">Remmy's Baked Goods</h3>
      <a href="tel:9181234567">
        <i className="fa-solid fa-phone" /> 918-123-4567
      </a>
      <a href="mailto:remmysbakery@gmail.com">
        <i className="fa-solid fa-envelope" /> remmysbakery@gmail.com
      </a>
    </div>
  );
}
