import "./about.css";
import kitchenImg from "../../assets/location/food-prep-area.jpeg";
import remmy from "../../assets/remy.jpg";

export default function About() {
  return (
    <section className="about-section">
      <img src={kitchenImg} alt="Bakery kitchen with baked goods on display" />
      <h2>About Our Bakery</h2>
      <p>
        Welcome to our cozy bakery, where we specialize in crafting delicious
        desserts and brewing the perfect cup of coffee. Our passion for baking
        and coffee-making is evident in every bite and sip you take.
      </p>
      <h3>Our Founder</h3>
      <p>
        Founded by Remmy in 2010, we have been serving the community with our
        artisanal baked goods and premium coffee for over a decade. Remmy is a
        trained pastry chef and coffee enthusiast who believes in the power of
        good food to bring people together.
      </p>
      <div className="profile-card">
        <img src={remmy}></img>
        <div className="profile-info">
          <h3>Remmy LePew</h3>
          <p>Founder & Head Baker</p>
        </div>
      </div>
      <h3>Our Commitment to Quality</h3>
      <p>
        We use only the finest ingredients, sourcing locally whenever possible,
        to ensure that every item on our menu is fresh and flavorful. From flaky
        pastries to rich, decadent cakes, our desserts are baked daily by our
        skilled bakers.
      </p>
      <p>
        Our coffee beans are ethically sourced from premium growers around the
        world, roasted to perfection, and ground fresh daily to bring out the
        best flavors in every cup. Whether you prefer a classic espresso or a
        creamy latte, our baristas are dedicated to crafting your perfect brew.
      </p>
      <p>
        We believe that a great bakery is more than just a place to grab a quick
        treat; it's a community hub where friends and family can gather to enjoy
        good food and great company. We invite you to visit us, explore our
        menu, and experience the warmth and hospitality that defines our bakery.
      </p>
    </section>
  );
}
