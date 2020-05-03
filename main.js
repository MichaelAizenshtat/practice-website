//Toggles the menu on and off when clicked
var outerMenu = document.querySelector('.menu-wrap .menu');
const innerMenu = document.querySelector('.menu-wrap .menu > div');
const links = document.querySelector('.menu-wrap .menu > div > div');
var hamburger = document.querySelector('.menu-wrap').addEventListener('click', showMenu);
var checkBox = document.querySelector('.menu-wrap .toggler')
function showMenu(){
    if(checkBox.checked === true){
        outerMenu.className += " visible";
    } else{
        outerMenu.className = "menu";
    }
}


