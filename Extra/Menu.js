const btn = document.getElementById("btnAnimar");
const caja = document.getElementById("caja");

btn.addEventListener("click", () => {
  caja.classList.remove("animar"); // reinicia la animación
  void caja.offsetWidth;           // truco para reiniciar correctamente
  caja.classList.add("animar");    // activa la animación
});
