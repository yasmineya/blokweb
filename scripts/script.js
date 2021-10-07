var menuKnop = document.querySelector(".menuknop");
menuKnop.addEventListener("click", veranderMenuKnop);


function veranderMenuKnop() {
    let menuKnopAfbeelding = document.querySelector(".menuknopafbeelding");

    if(menuKnopAfbeelding.classList.contains("open")) {
        menuKnopAfbeelding.src="images/hamburger.png";
        menuKnopAfbeelding.classList.toggle("open");
    }else{
        menuKnopAfbeelding.src="images/menu-sluiten.png";
        menuKnopAfbeelding.classList.toggle("open");
    }
}