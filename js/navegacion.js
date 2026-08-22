const paginas = [
    "index.html",
    "actividades/A1.html",
    "actividades/A2.html",
    "actividades/A3.html"
];

const paginaActual = window.location.pathname.split("/").pop();

const posicion = paginas.findIndex(
    pagina => pagina.endsWith(paginaActual)
);

// Detectamos si estamos dentro de la carpeta "actividades"
const estamosEnActividades =
    window.location.pathname.includes("/actividades/");

// Ajustamos las rutas según dónde estamos
const base = estamosEnActividades ? "../" : "";

document.getElementById("inicio").href =
    base + paginas[0];

document.getElementById("ultimo").href =
    base + paginas[paginas.length - 1];

if (posicion > 0) {
    document.getElementById("anterior").href =
        base + paginas[posicion - 1];
} else {
    document.getElementById("anterior").style.display = "none";
}

if (posicion < paginas.length - 1) {
    document.getElementById("siguiente").href =
        base + paginas[posicion + 1];
} else {
    document.getElementById("siguiente").style.display = "none";
}
