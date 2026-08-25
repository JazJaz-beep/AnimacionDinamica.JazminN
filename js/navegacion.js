const paginas = [
    "index.html",
    "A1.html",
    "A2.html",
    "A4.html",
    "A5.html"
];

const paginaActual = window.location.pathname.split("/").pop();

const posicion = paginas.indexOf(paginaActual);

console.log("Página actual:", paginaActual);
console.log("Posición:", posicion);


// ¿Estamos en el INDEX?
const esIndex = paginaActual === "index.html";


// INICIO
if (esIndex) {
    document.getElementById("inicio").style.display = "none";
} else {
    document.getElementById("inicio").href = "../index.html";
}


// ÚLTIMO
document.getElementById("ultimo").href =
    esIndex
        ? "actividades/" + paginas[paginas.length - 1]
        : "../actividades/" + paginas[paginas.length - 1];


// ANTERIOR
if (posicion > 0) {

    if (paginas[posicion - 1] === "index.html") {

        document.getElementById("anterior").href =
            esIndex ? "index.html" : "../index.html";

    } else {

        document.getElementById("anterior").href =
            esIndex
                ? "actividades/" + paginas[posicion - 1]
                : "../actividades/" + paginas[posicion - 1];
    }

} else {

    document.getElementById("anterior").style.display = "none";

}


// SIGUIENTE
if (posicion < paginas.length - 1) {

    if (paginas[posicion + 1] === "index.html") {

        document.getElementById("siguiente").href =
            esIndex ? "index.html" : "../index.html";

    } else {

        document.getElementById("siguiente").href =
            esIndex
                ? "actividades/" + paginas[posicion + 1]
                : "../actividades/" + paginas[posicion + 1];
    }

} else {

    document.getElementById("siguiente").style.display = "none";

}
