const btnmenu = document.getElementById("btnMenu")
const CMenu = document.getElementById("Cuerpo_Menu")

const Animacion = document.getElementById("Ani")
const Animacion2 = document.getElementById("Anii")
const Animacion3 = document.getElementById("Aniii")


btnmenu.addEventListener("click", () => {

        btnmenu.disabled = true;
    
    if (Animacion.classList.contains("animar")) {
        Animacion.classList.remove("animar")
        Animacion.classList.add("esconder")
        Animacion2.classList.remove("animar")
        Animacion2.classList.remove("animar2")
        Animacion2.classList.add("esconder")
        Animacion3.classList.remove("animar")
        Animacion3.classList.remove("animar3")
        Animacion3.classList.add("esconder")

        Animacion.style.animationDelay = "0s"
        Animacion3.style.animationDelay = "2s"
        
        setTimeout(() => {
        
        Animacion2.style.opacity = 0
    
        }, 3000);
    
    }

    else {
        Animacion.classList.remove("esconder")
        Animacion.classList.add("animar")
        Animacion2.classList.remove("esconder")
        Animacion2.classList.add("animar2")
        Animacion3.classList.remove("esconder")
        Animacion3.classList.add("animar3")

        Animacion.style.animationDelay = "2s"
        Animacion3.style.animationDelay = "0s"
        
        
        
        setTimeout(() => {
            Animacion3.style.opacity = 1
        }, 1500);
        
        setTimeout(() => {
        Animacion2.style.opacity = 1;
        Animacion2.style.backgroundPosition = "80% 100%";
        }, 3000);
        
        setTimeout(() => {
        Animacion3.style.opacity = 1;
        Animacion3.style.backgroundPosition = "90% 100%";
        }, 3000);



    }
    
    setTimeout(() => {
        btnmenu.disabled = false;
    }, 6000);


    
});