const paginas = [
    "/index.html",
    "/actividades/A1.html",
    "/actividades/A2.html",
    "/actividades/A4.html"
];

const paginaActual = window.location.pathname;

const posicion = paginas.findIndex(
    pagina => pagina === paginaActual
);

document.getElementById("inicio").href = paginas[0];

document.getElementById("ultimo").href = paginas[paginas.length - 1];

if (posicion > 0) {
    document.getElementById("anterior").href = paginas[posicion - 1];
} else {
    document.getElementById("anterior").style.display = "none";
}

if (posicion < paginas.length - 1) {
    document.getElementById("siguiente").href = paginas[posicion + 1];
} else {
    document.getElementById("siguiente").style.display = "none";
}