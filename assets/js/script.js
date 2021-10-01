
$(function(){
    var nav = document.querySelector("nav");

    // codigo que cambia de color la barra de navegacion al hacer scroll
    window.addEventListener("scroll", function(){
        if(window.pageYOffset > 100){
            nav.classList.add("combinacionColor1","shadow");
        }else{
            nav.classList.remove("combinacionColor1", "shadow");
        }
    });


});