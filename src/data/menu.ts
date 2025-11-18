export type MenuItem = {
  title: string;
  description?: string;
  price: number;
  image?: string;
};

import bananaBread from "../assets/banana-bread.jpg";
import caramelCups from "../assets/caramel-cups.png";
import cookies from "../assets/cookies.jpg";
import strawberryCake from "../assets/strawberry-cake.jpg";
import tiramisu from "../assets/tiramisu.png";
import coffee from "../assets/coffee.jpg";
import latte from "../assets/latte.jpg";

import cinnamonRoll from "../assets/cinnamon-roll.jpg";
import pumpkinSpice from "../assets/latte-pumpkin-spice.jpg";
import doubleChocolateCookie from "../assets/cookies-double-chocolate.jpg";
import croissant from "../assets/croissant.jpg";
import chocolateChipMuffin from "../assets/muffin-chocolate-chip.jpg";
import blueberryMuffin from "../assets/muffin-blueberry.jpg";
import strudel from "../assets/pastries.png";
import italianBread from "../assets/bread-italian.jpg";
import baguette from "../assets/bread-french.jpg";
import fiveGrainBread from "../assets/bread-multigrain.jpg";

export const deserts: MenuItem[] = [
  {
    title: "Banana Bread",
    image: bananaBread,
    price: 8.99,
    description: "Soft and scrupmtious banana bread, with and without nuts",
  },
  {
    title: "Caramel Apple Cups",
    image: caramelCups,
    price: 3.99,
    description:
      "Layers of pie crust crumbles, creme, and our house made apple filling topped with whipped cream and caramel throughout",
  },
  {
    title: "Oatmeal Chocolate Chip Cookies",
    image: cookies,
    price: 3.29,
    description:
      "Hearty oatmeal and rich bittersweet chocolate give these cookies a taste and texture that'll have you reaching for more!",
  },
  {
    title: "Double Chocolate Cookies",
    image: doubleChocolateCookie,
    price: 3.49,
    description:
      "For the chocolate lover, these double chocolate cookies are rich, fudgy, and absolutely delicious!",
  },
  {
    title: "Strawberry Cake",
    image: strawberryCake,
    price: 28.99,
    description:
      "Triple layers of our soft soft cake, with layers of strawberry slices and vanilla buttercream icing.",
  },
  {
    title: "Tiramisu",
    image: tiramisu,
    price: 29.39,
    description:
      "An italian classic with our own touch. Using our italian blend decaff coffee, this is a great choice for any time of day.",
  },
  {
    title: "Strudels",
    description:
      "Buttery strudel, different fillings including strawberry and apple with a creme glaze",
    price: 2.79,
    image: strudel,
  },
];

export const coffees: MenuItem[] = [
  {
    title: "Mocha Latte",
    description: "Hot latte with dark chocolate melted in",
    price: 3.99,
    image: latte,
  },
  {
    title: "Caramel Latte",
    description: "Hot latte with fresh house made caramel",
    price: 3.99,
    image: latte,
  },
  {
    title: "Cappacino",
    description: "Black coffee with a splash of cream",
    price: 3.19,
    image: latte,
  },
  {
    title: "Black Coffee",
    description: "Freshly brewed black coffee",
    price: 2.49,
    image: coffee,
  },
  {
    title: "Decaf Coffee",
    description: "No caffeine, great for any time of day",
    price: 2.49,
    image: coffee,
  },
  {
    title: "Pumpkin Spice Latte",
    description:
      "Seasonal favorite latte with pumpkin spice syrup and whipped cream",
    price: 4.49,
    image: pumpkinSpice,
  },
];

export const bakedGoods: MenuItem[] = [
  {
    title: "Croissant",
    description: "Flaky buttery croissant, perfect for breakfast",
    price: 2.99,
    image: croissant,
  },
  {
    title: "Chocolate Chip Muffin",
    description: "Freshly baked chocolate chip muffin. A classic!",
    price: 2.49,
    image: chocolateChipMuffin,
  },
  {
    title: "Blueberry Muffin",
    description: "Freshly baked blueberry muffin, bursting with flavor",
    price: 2.49,
    image: blueberryMuffin,
  },
  {
    title: "Cinnamon Roll",
    description: "Sweet cinnamon roll with icing drizzle on top",
    price: 3.49,
    image: cinnamonRoll,
  },

  {
    title: "Italian Bread",
    description:
      "Freshly baked Italian bread loaf, perfect for sandwiches or garlic bread",
    price: 3.99,
    image: italianBread,
  },
  {
    title: "Baguette",
    description: "Crispy on the outside, soft on the inside French baguette",
    price: 3.99,
    image: baguette,
  },
  {
    title: "5-Grain Bread",
    description: "Healthy and hearty 5-grain bread loaf",
    price: 5.49,
    image: fiveGrainBread,
  },
];
