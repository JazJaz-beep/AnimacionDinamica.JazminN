const paginas = [
    "index.html",
    "A1.html",
    "A2.html",
    "A4.html",
    "A5.html"
];

// Obtiene solamente el nombre del archivo actual
const paginaActual = window.location.pathname.split("/").pop();

// Busca su posición en el arreglo
const posicion = paginas.indexOf(paginaActual);

console.log("Página actual:", paginaActual);
console.log("Posición:", posicion);


// INICIO
document.getElementById("inicio").href = "../index.html";


// ÚLTIMO
document.getElementById("ultimo").href =
    "../actividades/" + paginas[paginas.length - 1];


// ANTERIOR
if (posicion > 0) {

    if (paginas[posicion - 1] === "index.html") {

        document.getElementById("anterior").href = "../index.html";

    } else {

        document.getElementById("anterior").href =
            "../actividades/" + paginas[posicion - 1];

    }

} else {

    document.getElementById("anterior").style.display = "none";

}


// SIGUIENTE
if (posicion < paginas.length - 1) {

    if (paginas[posicion + 1] === "index.html") {

        document.getElementById("siguiente").href = "../index.html";

    } else {

        document.getElementById("siguiente").href =
            "../actividades/" + paginas[posicion + 1];

    }

} else {

    document.getElementById("siguiente").style.display = "none";

}
