const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

openBtn.addEventListener("click", () => {
  mobileMenu.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.width = "0%";
});
