const sideNav = document.querySelector(".nav");
const ham = document.querySelector("#ham");
const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", toggleHamburger);
});

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
	sideNav.classList.toggle("showNav");
}
