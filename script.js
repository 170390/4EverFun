function mostrar(id) {

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// Mostrar visión al inicio
document.addEventListener("DOMContentLoaded", function() {
    mostrar('vision');
});
