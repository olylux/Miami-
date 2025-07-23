const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
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

cartList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cartItems.splice(index, 1);
    renderCart();
  }
});

document.addEventListener("DOMContentLoaded", renderCart);
