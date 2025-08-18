//Contacts list template injector:
const contactClass = ".contact";
const contactTemplate = `  <div class="flex-column">
            <h3 class="cursive">Remmy's Baked Goods</h3>
            <a href="tel:9181234567"
              ><i class="fa-solid fa-phone"></i> 918-123-4567</a
            >
            <a href="mailto:verdantwebworks@gmail.com"
              ><i class="fa-solid fa-envelope"></i> remmysbakery@gmail.com</a
            >
          </div>`;

const contactsList = document.querySelectorAll(contactClass);
for (let item of contactsList) {
  item.innerHTML = contactTemplate;
}

//Dropdown menu for mobile:
const menuOpen = `<i class="fa-solid fa-xmark"></i>`;
const menuClosed = `<i class="fa-solid fa-bars"></i>`;
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#navlist");

function openMenu() {
  let menuIsOpen = navMenu.classList.contains(activator);
  if (!menuIsOpen) {
    navMenu.classList.add(activator);
    menuButton.innerHTML = menuOpen;
  }
}
function closeMenu() {
  let menuIsOpen = navMenu.classList.contains(activator);

  if (menuIsOpen) {
    navMenu.classList.remove(activator);
    menuButton.innerHTML = menuClosed;
  }
}

menuButton.addEventListener("click", function () {
  let menuIsOpen = navMenu.classList.contains(activator);
  if (menuIsOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

//Modals:
const modalClass = ".modal";
const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const activator = "active";

const openModalButtons = document.querySelectorAll(modalOpen);
let openBtns = {};
const closeModalButtons = document.querySelectorAll(modalClose);
let modalObjects = {};
const modals = document.querySelectorAll(modalClass);
for (let modal of modals) {
  const modalId = modal.id;
  modalObjects[modalId] = modal;
}

let currentModal;

function openModal(modalId) {
  if (currentModal) {
    closeModal(currentModal);
  }
  let menuIsOpen = navMenu.classList.contains(activator);
  if (menuIsOpen) {
    closeMenu();
  }
  modalObjects[modalId].classList.add(activator);
  openBtns[modalId].classList.add(activator);
  currentModal = modalId;
}
function closeModal(modalId) {
  openBtns[modalId].classList.remove(activator);
  modalObjects[modalId].classList.remove(activator);
  currentModal = "";
}

for (const elm of openModalButtons) {
  const modalId = elm.dataset.open;
  openBtns[modalId] = elm;
  elm.addEventListener("click", function () {
    openModal(modalId);
  });
}

for (const elm of closeModalButtons) {
  const modalId = elm.dataset.close;
  elm.addEventListener("click", function () {
    closeModal(modalId);
  });
}

//shoppingCart
const cartContainer = document.getElementById("cart");
const cartButton = document.getElementById("cart-btn");
cartButton.addEventListener("click", function () {
  if (cartContainer.classList.contains(activator)) {
    cartContainer.classList.remove(activator);
  } else {
    cartContainer.classList.add(activator);
  }
});
