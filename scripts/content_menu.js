document.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    menu.style.display = "flex";
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
});

document.addEventListener("click", hide_menu)

function hide_menu(click){
    if(!menu.contains(click.target)){
        menu.style.display = "none";
    }
}