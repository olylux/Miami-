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

//  Product Rendering Starts Here
const products = [
  {
    id: 1,
    name: "OLYLUX Classic Tee",
    price: "₦8,500",
    image: "images/product1.jpg"
  },
  {
    id: 2,
    name: "OLYLUX Logo Hoodie",
    price: "₦14,000",
    image: "images/product2.jpg"
  },
  {
    id: 3,
    name: "OLYLUX Denim Jacket",
    price: "₦18,000",
    image: "images/product3.jpg"
  },
  {
    id: 4,
    name: "OLYLUX Cotton Shorts",
    price: "₦6,500",
    image: "images/product4.jpg"
  },
  {
    id: 5,
    name: "OLYLUX Sporty Set",
    price: "₦15,500",
    image: "images/product5.jpg"
  },
  {
    id: 6,
    name: "OLYLUX Summer Vibe Tee",
    price: "₦9,000",
    image: "images/product6.jpg"
  },
  {
    id: 7,
    name: "OLYLUX Joggers",
    price: "₦11,000",
    image: "images/product7.jpg"
  },
  {
    id: 8,
    name: "OLYLUX Limited Cap",
    price: "₦4,500",
    image: "images/product8.jpg"
  },
  {
    id: 9,
    name: "OLYLUX Oversized Sweatshirt",
    price: "₦16,000",
    image: "images/product9.jpg"
  },
  {
    id: 10,
    name: "OLYLUX Signature Pants",
    price: "₦12,000",
    image: "images/product10.jpg"
  }
];

// Render products on homepage
const productSection = document.querySelector(".product-section");

if (productSection) {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <a href="product.html?id=${product.id}" class="btn">View Details</a>
    `;
    productSection.appendChild(div);
  });
}

//  Hero Slider: Auto Slide + Swipe + Indicators
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#hero-banner .slide");
  const indicatorsContainer = document.getElementById("slide-indicators");
  let currentIndex = 0;
  let touchStartX = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    // Update dot indicators
    if (indicatorsContainer) {
      Array.from(indicatorsContainer.children).forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function createIndicators() {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("indicator-dot");
      dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
        restartAutoSlide();
      });
      indicatorsContainer.appendChild(dot);
    });
  }

  function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function enableSwipe() {
    const banner = document.getElementById("hero-banner");
    banner.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });

    banner.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;

      if (diffX > 50) {
        // Swipe Right
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        restartAutoSlide();
      } else if (diffX < -50) {
        // Swipe Left
        nextSlide();
        restartAutoSlide();
      }
    });
  }

  if (slides.length > 0) {
    createIndicators();
    showSlide(currentIndex);
    autoSlideInterval = setInterval(nextSlide, 5000);
    enableSwipe();
  }
});
