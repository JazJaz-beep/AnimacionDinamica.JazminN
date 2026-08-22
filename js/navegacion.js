const paginas = [
    "index.html",
    "actividades/A1.html",
    "actividades/A2.html",
    "actividades/A4.html"
];

const paginaActual = window.location.pathname.split("/").pop();

const posicion = paginas.findIndex(
    pagina => pagina.endsWith(paginaActual)
);

const estamosEnActividades = window.location.pathname.includes("/actividades/");

// INICIO
document.getElementById("inicio").href = estamosEnActividades
    ? "../index.html"
    : "index.html";

// ÚLTIMO
document.getElementById("ultimo").href = estamosEnActividades
    ? "A4.html"
    : "actividades/A4.html";

// ANTERIOR
if (posicion > 0) {

    const paginaAnterior = paginas[posicion - 1];

    document.getElementById("anterior").href = estamosEnActividades
        ? paginaAnterior === "index.html"
            ? "../index.html"
            : paginaAnterior.replace("actividades/", "")
        : paginaAnterior;

} else {
    document.getElementById("anterior").style.display = "none";
}


// SIGUIENTE
if (posicion < paginas.length - 1) {

    const paginaSiguiente = paginas[posicion + 1];

    document.getElementById("siguiente").href = estamosEnActividades
        ? paginaSiguiente.replace("actividades/", "")
        : paginaSiguiente;

} else {
    document.getElementById("siguiente").style.display = "none";
}
