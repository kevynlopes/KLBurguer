let navMenu = document.querySelector(".menuNav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function addToCart() {
  let toastAddToCart = document.createElement("div");
  let body = document.querySelector("body");
  toastAddToCart.classList.add("toast");

  toastAddToCart.innerHTML = "Burguer adicionado ao carrinho!";

  body.appendChild(toastAddToCart);

  setTimeout(() => {
    body.removeChild(toastAddToCart);
  }, 2000);
}
