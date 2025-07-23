// ======= Checkout Script =======

// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const checkoutForm = document.getElementById("checkout-form");

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect data (you can extend this later)
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;

      // You can add validation here

      // Optionally store to localStorage or send to backend (API)
      const orderDetails = {
        fullName,
        email,
        address,
        orderDate: new Date().toLocaleString(),
      };

      localStorage.setItem("lastOrder", JSON.stringify(orderDetails));

      // Show success message
      alert("🎉 Thank you " + fullName + "! Your order has been placed successfully.");

      // Redirect to thank you page or homepage
      window.location.href = "thankyou.html";
    });
  }
});
