 
var navLinks = document.getElementsById("navLinks");
function showMenu(){
    navLinks.style.right ="0";
}
function hideMenu(){
    navLinks.style.right ="-200px";
}

let menu = document.querySelector("#menu-icon");
let navLinks = document.querySelector(".navLinks");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navLinks.classList.toggle("active");
};