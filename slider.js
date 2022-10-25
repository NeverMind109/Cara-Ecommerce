// Single Product Page Slider
const mainImg = document.getElementById("main-img");
const smallImages = document.querySelectorAll(".single-product__small-img");

smallImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    smallImages.forEach((img) => img.classList.remove("active"));

    const chosenImg = e.currentTarget;
    chosenImg.classList.add("active");
    const chosenImgSrc = chosenImg.src;
    mainImg.src = chosenImgSrc;
  });
});
