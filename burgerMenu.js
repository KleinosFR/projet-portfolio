// const burgerIcon = document.getElementById("burgerIcon");
const burgerMenu = document.getElementById("burgerMenu");
const burgerIconContainer = document.getElementById("burgerIconContainer");
let isBurgerClosed = true;
console.log(burgerIcon);
console.log(burgerMenu);



burgerIconContainer.addEventListener("click", () => {
    if (isBurgerClosed){
      burgerMenu.style.display = "flex";
      burgerIconContainer.innerHTML = '<img id="burgerIcon" src="images/logo_insta_noir.png" alt="menu icon">'
      isBurgerClosed = false;
      console.log(isBurgerClosed);
    }
      else {
        burgerMenu.style.display = "none";
      burgerIconContainer.innerHTML = '<img id="burgerIcon" src="images/menu_icon.png" alt="menu icon">'
      isBurgerClosed = true;
      console.log(isBurgerClosed)
    }
    ;
})

burgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "none";
  burgerIconContainer.innerHTML = '<img id="burgerIcon" src="images/menu_icon.png" alt="menu icon">';
  isBurgerClosed = true;
  console.log(isBurgerClosed)
} )


