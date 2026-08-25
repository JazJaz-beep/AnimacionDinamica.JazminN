const paginas = [
    "index.html",
    "A1.html",
    "A2.html",
    "A4.html",
    "A5.html
];

const paginaActual = window.location.pathname.split("/").pop();

const posicion = paginas.indexOf(paginaActual);

const estamosEnActividades =
    window.location.pathname.includes("/actividades/");


// INICIO
document.getElementById("inicio").href =
    estamosEnActividades ? "../index.html" : "index.html";


// ANTERIOR
if (posicion > 0) {

    document.getElementById("anterior").href =
        estamosEnActividades
            ? paginas[posicion - 1] === "index.html"
                ? "../index.html"
                : paginas[posicion - 1]
            : "actividades/" + paginas[posicion - 1];

} else {

    document.getElementById("anterior").style.display = "none";

}


// SIGUIENTE
if (posicion < paginas.length - 1) {

    document.getElementById("siguiente").href =
        estamosEnActividades
            ? paginas[posicion + 1]
            : "actividades/" + paginas[posicion + 1];

} else {

    document.getElementById("siguiente").style.display = "none";

}


// ÚLTIMO
document.getElementById("ultimo").href =
    estamosEnActividades
        ? "A4.html"
        : "actividades/A4.html";
