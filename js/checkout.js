document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("cartItems");
    window.location.href = "thankyou.html";
  });
});
