const burgerMenu = document.getElementById("burgerMenu");
const burgerIconContainer = document.getElementById("burgerIconContainer");
let isBurgerClosed = true;


// defines actions to excute to close burger menu
const closeBurger = () => {
  burgerMenu.style.display = "none";
  burgerIconContainer.innerHTML = '<img id="burgerIcon" src="images/menu_icon.png" alt="menu icon">'
  isBurgerClosed = true;
}


// listens to events on the burger icon

burgerIconContainer.addEventListener("click", () => {
    let screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (isBurgerClosed && screenWidth < 768){
      burgerMenu.style.display = "flex";
      burgerIconContainer.innerHTML = '<img id="burgerIcon" src="images/logo_insta_noir.png" alt="menu icon">'
      isBurgerClosed = false;
      console.log(isBurgerClosed);
    }
      else {
      closeBurger();
      console.log(isBurgerClosed)
    }
    ;
})

burgerMenu.addEventListener("click", () => {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) {
  closeBurger();
  console.log(isBurgerClosed)
  }
} )

// displays menu or not, on window resize

window.onresize = () => { if (window.innerWidth>768) {
  burgerMenu.style.display = "flex";} 
        else {
        closeBurger();                            
      }}

