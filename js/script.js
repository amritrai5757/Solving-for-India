// NavBar drop down menu code
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// cardFunction

function showInventory() {
    document.getElementById("inventoryCard").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function showChat() {
    document.getElementById("chatCard").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideCard() {
    document.getElementById("inventoryCard").style.display = "none";
    document.getElementById("chatCard").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}