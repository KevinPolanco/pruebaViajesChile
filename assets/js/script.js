// codigo que cambia de color la barra de navegacion al hacer scroll

var nav = document.querySelector("nav");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 100){
        nav.classList.add("celeste","shadow");
    }else{
        nav.classList.remove("celeste", "shadow");
    }
});