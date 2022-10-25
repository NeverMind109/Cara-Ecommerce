// mobile menu
const mobileMenuBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("navigation");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-outdent"></i>';
    } else {
      mobileMenu.classList.add("active");
      mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });
}

// products section card hover
const products = document.querySelectorAll(".product");

if (products) {
  products.forEach((product) => {
    const productName = product.querySelector(".product__name");
    productName.addEventListener("mouseenter", () => {
      product.classList.toggle("product-hover-shadow");
    });
    productName.addEventListener("mouseleave", () => {
      product.classList.toggle("product-hover-shadow");
    });
  });
}
