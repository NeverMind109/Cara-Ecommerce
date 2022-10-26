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

// shopping cart
const cartTableWrap = document.querySelector(".cart__wrapper");

if (cartTableWrap) {
  const cartProductElts = document.querySelectorAll(".cart__table-row");

  // isCartEmpty();
  totalPrice();

  cartProductElts.forEach((product) => {
    const cartProductPriceEl = product.querySelector(".cart__cost");
    const cartProductQuantityInput = product.querySelector(".cart__quantity");
    const cartProductSubtotalEl = product.querySelector(".cart__subtotal");

    product.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("cart__delete-btn")) {
        product.remove();
        console.log(cartProductElts.length);
        totalPrice();
        isCartEmpty();
      }
    });

    if (
      cartProductQuantityInput.value === null ||
      cartProductQuantityInput.value === undefined
    ) {
      cartProductQuantityInput.value = 1;
    }

    cartProductQuantityInput.addEventListener("input", () => {
      const value = cartProductQuantityInput.value;
      const price = cartProductPriceEl.textContent.slice(1);
      cartProductSubtotalEl.textContent = `$${(value * price).toFixed(2)}`;
      totalPrice();
    });
  });
}

function totalPrice() {
  const cartProductElts = document.querySelectorAll(".cart__table-row");
  const cartFinalSubtotal = document.getElementById("final-subtotal");
  const cartFinalTotal = document.getElementById("final-total");
  let isCouponApplied = false;

  if (!isCouponApplied) {
    const prices = [];

    cartProductElts.forEach((el) => {
      const price = el.querySelector(".cart__subtotal");
      prices.push(Number(price.textContent.slice(1)));
    });

    const sum = prices.reduce((acc, price) => {
      acc += price;
      return acc;
    }, 0);

    cartFinalSubtotal.textContent = `$${sum.toFixed(2)}`;
    cartFinalTotal.textContent = `$${sum.toFixed(2)}`;
  }
}

function isCartEmpty() {
  const cartProductElts = document.querySelectorAll(".cart__table-row");
  if (cartProductElts.length === 0) {
    cartTableWrap.innerHTML = `<span class = 'cart__text-empty'>Your cart is empty</span>`;
  }
}
