alert(
  "This NikeProject as final challenge of front-end bootcamp has done by Yasna Abdi"
);
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-shoe",
    prevEl: ".swiper-button-prev-shoe",
  },
});
var menShop = new Swiper(".men-shop", {
  slidesPerView: 2,
  spaceBetween: 10,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-men",
    prevEl: ".swiper-button-prev-men",
  },
});
var menShop = new Swiper(".women-shop", {
  slidesPerView: 2,
  spaceBetween: 10,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-women",
    prevEl: ".swiper-button-prev-women",
  },
});
let video = document.getElementById("video");
let deleteBtn = document.getElementById("delete-btn");
function videoPlay() {
  video.setAttribute("controls", "");
  video.play();
  deleteBtn.remove();
}
/*
const menuScroll = document.getElementById("navbar");
menuScroll.classList.remove("scroll-menu");
menuScroll.classList.remove("fix-menu");
window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY) {
    //console.log("up");
    //menuScroll.classList.remove("scroll-menu");
    menuScroll.classList.add("fix-menu");
  } else {
    // console.log("down");
    menuScroll.classList.remove("fix-menu");
    // menuScroll.classList.add("scroll-menu");
  }
  if (this.scrollY == 0) {
    menuScroll.style.position = "relative";
  } else {
    console.log("we are not");
  }
  this.oldScroll = this.scrollY;
};
*/
