const btn = document.getElementById("especialidades")
const CLeche = document.getElementById("CLeche")
const CCaramelo = document.getElementById("CCaramelo")
const CPistacho = document.getElementById("CPistacho")


btn.addEventListener("click", () => {

    btn.disabled = true

    if (CLeche.classList.contains("Bajar")) {
        CLeche.classList.remove("Bajar")
        CLeche.style.opacity = 1
        CLeche.style.animationDelay = "0s"
        CLeche.classList.add("Subir")

        CCaramelo.classList.remove("Bajar")
        CCaramelo.style.opacity = 1
        CCaramelo.classList.add("Subir")

        CPistacho.classList.remove("Bajar")
        CPistacho.style.opacity = 1
        CPistacho.style.animationDelay = "2.5s"
        CPistacho.classList.add("Subir")
    }

    else{
        CLeche.classList.remove("Subir")
        CLeche.style.opacity = 0
        CLeche.style.animationDelay = "2.5s"
        CLeche.classList.add("Bajar")

        CCaramelo.classList.remove("Subir")
        CCaramelo.style.opacity = 0
        CCaramelo.classList.add("Bajar")

        CPistacho.classList.remove("Subir")
        CPistacho.style.opacity = 0
        CPistacho.style.animationDelay = "0s"
        CPistacho.classList.add("Bajar")


    }

    setTimeout(() => {
        btn.disabled = false;
    }, 5000);


})
