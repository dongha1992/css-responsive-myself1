const header = document.querySelector("header");
const li = document.getElementById("list");
const toggleBtn = document.querySelector(".toggle");
const img = document.querySelectorAll("img")
const slide = document.getElementById("text-slide-2")
const right = document.querySelectorAll(".right")



function scroll() {
  const ypos = window.scrollY

  if (ypos > 630) {
    slide.style.opacity = "1";
  }

}

function handleScroll() {
  header.classList.toggle("sticky", window.scrollY > 0);

  li.classList.toggle("active");
}

function showHeader() {
  header.classList.toggle("active");
}

function init() {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", scroll);
  toggleBtn.addEventListener("click", showHeader);
  scroll()
}

init();