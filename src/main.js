const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", open);
}

// открыть/закрыть той же кнопкой
menuBtn.addEventListener("click", () => {
  setMenu(!menu.classList.contains("is-open"));
});

// закрыть при клике на пункт меню
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// закрыть по Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
