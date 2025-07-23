// Hamburger Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Animate on Scroll (Basic AOS imitation)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-aos]");
  const onScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("aos-animate");
      }
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll);
});
