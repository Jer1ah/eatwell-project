/*-- VINILLA JAVASCRIPT --*/

const button = document.getElementsByClassName("phone__nav")[0];
const nav = document.getElementsByClassName("navigation")[0];

button.addEventListener("click", () => {
    if( nav.style.display != "flex" ) {
        nav.style.display = "flex";
    } else if ( nav.style.display == "flex" ) {
        nav.style.display = "none";
    }
});





