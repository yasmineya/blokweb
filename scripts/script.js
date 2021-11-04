var menuKnop = document.querySelector(".menuKnop");
var menu = document.querySelector('.hamburgerMenu');
var menuKnopAfbeelding = document.querySelector(".menuKnopAfbeelding");

menuKnop.addEventListener('click', function() {
    if(menuKnop.classList.contains("knopactief")) {
        menuKnopAfbeelding.src="images/hamburger.png";
        menuKnop.classList.toggle('knopactief'); 
        menu.classList.toggle('toonmenu');
    }else{
        menuKnop.src="images/menu-sluiten.png";
        menuKnop.classList.toggle('knopactief'); 
        menu.classList.toggle('toonmenu');
    }
});

menuKnopParent.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        menuKnop.click();
    }
});  
