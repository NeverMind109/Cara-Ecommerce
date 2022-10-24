const products = document.querySelectorAll(".product");

products.forEach((product) => {
  const productName = product.querySelector(".product__name");
  productName.addEventListener("mouseenter", () => {
    product.classList.toggle("product-hover-shadow");
  });
  productName.addEventListener("mouseleave", () => {
    product.classList.toggle("product-hover-shadow");
  });
});
