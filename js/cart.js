// ======= CART.JS =======

// Load cart items from localStorage or sample
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [
  {
    id: 1,
    name: "Olylux T-Shirt",
    price: 12000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Hoodie",
    price: 18500,
    quantity: 2,
  },
];

const cartList = document.querySelector(".cart-items");
const subtotalBox = document.querySelector(".subtotal-amount");

function renderCart() {
  cartList.innerHTML = "";

  let subtotal = 0;

  cartItems.forEach((item, index) => {
    subtotal += item.price * item.quantity;

    const itemEl = document.createElement("div");
    itemEl.classList.add("cart-item");

    itemEl.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>₦${item.price.toLocaleString()} x 
        <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="qty-input" />
      </p>
      <button data-index="${index}" class="remove-btn">Remove</button>
    `;

    cartList.appendChild(itemEl);
  });

  subtotalBox.innerText = "₦" + subtotal.toLocaleString();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// ======= Event: Update Quantity =======
cartList.addEventListener("input", (e) => {
  if (e.target.classList.contains("qty-input")) {
    const index = e.target.dataset.index;
    const newQty = parseInt(e.target.value);
    if (newQty >= 1) {
      cartItems[index].quantity = newQty;
      renderCart();
    }
  }
});

// ======= Event: Remove Item =======
cartList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cartItems.splice(index, 1);
    renderCart();
  }
});

// ======= Initial Render =======
document.addEventListener("DOMContentLoaded", renderCart);
