const burgerIcon = document.getElementById("burgerIcon");
const burgerMenu = document.getElementById("burgerMenu");
console.log(burgerIcon);
console.log(burgerMenu);


burgerIcon.addEventListener("click", () => {
    burgerMenu.style.display = "block";
    burgerIcon.style.display ="none";
   console.log ('click');
 })
