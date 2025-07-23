document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalElement = document.querySelector(".cart-total-price");

  // Update Total Price
  function updateCartTotal() {
    const cartRows = document.querySelectorAll(".cart-row");
    let total = 0;

    cartRows.forEach(row => {
      const priceElement = row.querySelector(".cart-price");
      const quantityElement = row.querySelector(".cart-quantity-input");

      const price = parseFloat(priceElement.innerText.replace("₦", "").replace(",", ""));
      const quantity = parseInt(quantityElement.value);

      total += price * quantity;
    });

    cartTotalElement.innerText = "₦" + total.toLocaleString();
  }

  // Remove Item From Cart
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remove")) {
      e.target.closest(".cart-row").remove();
      updateCartTotal();
    }
  });

  // Quantity Change
  cartItemsContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("cart-quantity-input")) {
      const input = e.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updateCartTotal();
    }
  });

  // Example: Adding item to cart (You can call this from another page if needed)
  function addItemToCart(title, price, imageSrc) {
    const cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    const cartItemContent = `
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100" />
        <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">₦${price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" />
        <button class="btn btn-remove">Remove</button>
      </div>
    `;

    cartRow.innerHTML = cartItemContent;
    cartItemsContainer.appendChild(cartRow);
    updateCartTotal();
  }

  // Optional: Example call to add item (remove this in production)
  // addItemToCart("Sample Shirt", "7500", "img/shirt.jpg");

  // Update totals on page load
  updateCartTotal();
});
