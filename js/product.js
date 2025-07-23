function addToCart(productId, productName, productPrice) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Item added to cart!");
}
