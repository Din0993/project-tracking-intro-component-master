const hamburger = document.querySelector(".right-side__nav-menu");
const modalWindow = document.querySelector(".open-modal");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("icon-ham");
  hamburger.classList.toggle("icon-close");
  if (hamburger.classList.contains("icon-close")) {
    modalWindow.style.top = "11rem";
    modalWindow.style.opacity = "1";
  } else {
    modalWindow.style.top = "-50rem";
    modalWindow.style.opacity = "0";
  }
});
