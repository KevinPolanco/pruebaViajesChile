
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

    
    //codigo para cambiar elementos de color
    $(".cambiarColor").dblclick(function(){
        $(this).css("color","var(--color-dos)");
    });


    //codigo para hacer aparecer seccion quienes somos en modo mobil
    $("#quienes").click(function(){
        $("#quienesSomos").removeClass("d-none");
    });

    //codigo para volver agregar clase d-none al cambiar tamaño de pantalla
    window.addEventListener("resize", function(){
        quienesSomos.classList.add("d-none"); 
    });


    //codiogo de tooltiop
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

});