// my age
let birthYear = 2002;
let currentYear = new Date();
let yr = currentYear.getFullYear();

let age = yr - birthYear;
document.querySelector(".age").innerText = age;
document.querySelector(".year").innerText = yr;

let hamburger = $(".hamburger");
let menu = $(".item_right .navigation_bar ul");
let menuOverlay = $(".mobile_overlay");
let closeMenu = $(".close_menu");
hamburger.on("click", () => {
    menuToggle();
});
menuOverlay.on("click", () => {
    menuToggle();
});
closeMenu.on("click", () => {
    menuToggle();
});

function menuToggle() {
    menuOverlay.toggleClass("active-nav");
    menu.toggleClass("active-nav");
}