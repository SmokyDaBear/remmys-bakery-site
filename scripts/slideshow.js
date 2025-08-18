const slideshowOne = document.querySelector("#slideshow-one");
const menuContainer = document.querySelector("#full-menu");
const root = document.documentElement;
const deserts = [
  {
    title: "Banana Bread",
    image: "./assets/banana-bread.jpg",
    price: 8.99,
    description: "Soft and scrupmtious banana bread, with and without nuts",
  },
  {
    title: "Caramel Apple Cups",
    image: "./assets/caramel-cups.png",
    price: 3.99,
    description:
      "Layers of pie crust crumbles, creme, and our house made apple filling topped with whipped cream and caramel throughout",
  },
  {
    title: "Outmeal Chocolate Chip Cookies",
    image: "./assets/cookies.jpg",
    price: 3.29,
    description:
      "Hearty outmeal and rich bittersweet chocalate give these cookies a taste and texture that'll have you reaching for more!",
  },
  {
    title: "Strawberry Cake",
    image: "./assets/strawberry-cake.jpg",
    price: 28.99,
    description:
      "Triple layers of our soft soft cake, with layers of strawberry slices and vanilla buttercream icing.",
  },
  {
    title: "Tiramisu",
    image: "./assets/tiramisu.png",
    price: 29.39,
    description:
      "An italian classic with our own touch. Using our italian blend decaff coffee, this is a great choice for any time of day.",
  },
];
const coffees = [
  {
    title: "Mocha Latte",
    description: "Hot latte with dark chocolate melted in",
    price: 3.99,
  },
  {
    title: "Caramel Latte",
    description: "Hot latte with fresh house made caramel",
    price: 3.99,
  },
  {
    title: "Cappacino",
    description: "Black coffee with a splash of cream",
    price: 3.19,
  },
  {
    title: "Black Coffee",
    description: "Freshly brewed black coffee",
    price: 2.49,
  },
  {
    title: "Decaf Coffee",
    description: "No caffeine, great for any time of day",
    price: 2.49,
  },
];

//Shopping cart funcitonality:
class CartItem {
  constructor(menuItem, quantity) {
    let { title, description, price, image } = menuItem;
    this.title = title;
    this.image = image;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = CartItem.getTotalItemPrice(this);
  }
  static getTotalItemPrice(cartItem) {
    return Number((cartItem.price * cartItem.quantity).toFixed(2));
  }
  static updateQuantity(cartItem, newQuantity) {
    cartItem.quantity = +newQuantity;
    cartItem.totalPrice = CartItem.getTotalItemPrice(cartItem);
  }
}
const cart = {
  items: [],
  preTaxTotal: 0,
};
const cartTotalElement = document.getElementById("cart-total");
const cartItemsElement = document.getElementById("cart-items");
const cartTotalFormatter = (price) =>
  `<span>Total - $</span>${Number(price.toFixed(2))}`;

const addCartItem = (menuItem, quantity) => {
  let cartItem = new CartItem(menuItem, quantity);
  cart.items.push(cartItem);
  cart.preTaxTotal = getPretaxTotal(cart);
};
const removeCartItem = function (index) {
  cart.items.splice(index, 1);
  cart.preTaxTotal = getPretaxTotal(cart);
  printCart();
};
const getPretaxTotal = (cartObj) => {
  let total = 0;
  for (let item of cartObj.items) {
    if (item.totalPrice) {
      total += item.totalPrice;
    } else {
      console.error("No price for item: ", item.title);
    }
  }
  return total;
};

const addListenersToCart = function () {
  const deleteBtn = "[data-delete]";
  const quantityBtn = "[data-updatequantity]";
  let newQuantity = "[data-newquantity]";
  const deleters = document.querySelectorAll(deleteBtn);
  const quantityUpdaters = document.querySelectorAll(quantityBtn);
  const quantities = document.querySelectorAll(newQuantity);

  for (const btn of deleters) {
    btn.addEventListener("click", function () {
      const index = this.dataset.delete;
      console.log(index);
      removeCartItem(index);
    });
  }
  for (const inputs of quantities) {
    inputs.addEventListener("keyup", function () {
      const index = this.dataset.newquantity;
      console.log(index);
      const newQuantityInner = this.value;
      const item = cart.items[+index];
      console.log(`${item}: ${newQuantityInner}`);
      CartItem.updateQuantity(item, newQuantityInner);
    });
  }
  for (const btn of quantityUpdaters) {
    btn.addEventListener("click", function () {
      printCart();
    });
  }
};

const formatCartItem = (cartItem, index) => {
  let { title, image, price, quantity, totalPrice } = cartItem;
  if (image) {
    image = `<img src="${image}" alt="${title}">`;
  } else {
    image = "";
  }
  return ` <div class="cart-item">
           <div>
               <h4>${title}</h4>
             
           </div>
           <div>
              <p>$${price} ea.</p>
              </div>
              <div class="quantity">
                <input type="number" name="new-quantity${index}" data-newquantity="${index}" placeholder="${quantity}"/>
                <button class="btn flat-i-btn" data-updatequantity="${index}"><i class="fa-solid fa-arrows-rotate"></i></button>
              </div>
              <div>
              <p>$${totalPrice}</p>
              </div>
              <button class="btn flat-i-btn" data-delete="${index}">
            <i class="fa-solid fa-xmark"></i>
          </button>
            </div>`;
};

const printCart = () => {
  let cartItems = "";
  let index = 0;
  for (let item of cart.items) {
    cartItems += formatCartItem(item, index);
    index++;
  }
  cart.preTaxTotal = getPretaxTotal(cart);
  cartItemsElement.innerHTML = cartItems;
  cartTotalElement.innerHTML = cartTotalFormatter(cart.preTaxTotal);
  addListenersToCart();
};

const printCartConsole = (cartObj) => {
  console.table(cartObj["items"]);
  console.log("current Total:", cartObj.preTaxTotal);
};
//Menu Items for shopping:
const generateMenuItem = function (menuItem, menuList) {
  let { title, price } = menuItem;
  menuList[title] = { menuItem: menuItem };
  const card = formatCardMini(menuItem);
  return `          <div class="menu-item">
            <h3>${title}</h3>
            <div>${card}</div>
            <p class="menu-item-price">Price: $${price} each</p>
            <label for="menu-item-${title}"
              >Quantity -
              <input type="number" name="menu-item-${title}" placeholder="1" data-quantity="${title}"/>
            </label>
            <button class="add-to-cart btn order-btn" data-cartitem="${title}">Add to Cart</button>
          </div>`;
};
const generateFullMenu = function (...objects) {
  let [coffees, deserts, menuObj] = objects;
  let answer = "";
  for (let item of coffees) {
    answer += generateMenuItem(item, menuObj);
  }
  for (let item of deserts) {
    answer += generateMenuItem(item, menuObj);
  }
  return answer;
};

const formatCardMini = function (card) {
  let { title, image, description } = card;
  if (!image) {
    image = "./assets/banana-bread.jpg";
  }
  return `<div class="portfolio-card mini" data-tag="${title}">
            <div class="card-body">
              <img src="${image}" alt="desert icon" />
              <a href="#" class="card-popup-box">
              <h3>${title}</h3>
                <div>${description}</div>
                
              </a>
            </div>
          </div>`;
};

const formatCard = function (card) {
  let { title, image, description } = card;
  if (!image) {
    image = "./assets/banana-bread.jpg";
  }
  return `<div class="portfolio-card" data-tag="${title}">
            <div class="card-body">
              <img src="${image}" alt="desert icon" />
              <a href="#" class="card-popup-box">
              <h3>${title}</h3>
                <div>${description}</div>
                
              </a>
            </div>
          </div>`;
};

const formatCardsList = (cardsList) => {
  let answer = "";
  for (let card of cardsList) {
    answer += formatCard(card);
  }
  return answer;
};

const updateOrderMenu = function () {
  const menuItems = {};
  const desertsList = formatCardsList(deserts);
  const fullMenu = generateFullMenu(coffees, deserts, menuItems);
  slideshowOne.innerHTML += desertsList;
  menuContainer.innerHTML += fullMenu;
  const dataQuantity = document.querySelectorAll("[data-quantity");
  const menuItemAdd = document.querySelectorAll("[data-cartitem");
  for (const input of dataQuantity) {
    const item = input.dataset.quantity;
    input.addEventListener("keyup", function () {
      quantity = this.value;
      menuItems[item].quantity = quantity;
    });
  }

  for (const btn of menuItemAdd) {
    btn.addEventListener("click", function () {
      const item = this.dataset.cartitem;
      const cartItem = menuItems[item].menuItem;
      let quantity = menuItems[item].quantity | 1;
      addCartItem(cartItem, quantity);
      printCart();
    });
  }
};

updateOrderMenu();

//Temporary Tests:
