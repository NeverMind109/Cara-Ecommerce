const products = document.querySelectorAll(".product");

products.forEach((product) => {
  const productName = product.querySelector(".product__name");
  productName.addEventListener("mouseenter", () => {
    product.classList.remove("product-default-shadow");
    product.classList.add("product-hover-shadow");
  });
  productName.addEventListener("mouseleave", () => {
    product.classList.remove("product-hover-shadow");
    product.classList.add("product-default-shadow");
  });
});
