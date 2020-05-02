var icon = document.querySelector('.icon').addEventListener('click', myFunction);
var nav = document.querySelector('.topnav');
function myFunction(){
    if (nav.className === 'topnav'){
        nav.className += " responsive";
    } else{
        nav.className = "topnav";
    }
    console.log(nav.innerHTML)
};

