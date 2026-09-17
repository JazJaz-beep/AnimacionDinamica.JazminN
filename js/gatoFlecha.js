
function Arrow() {

  this.x = 0;
  this.y = 0;
  this.rotation = 0;

  this.image = new Image();

  this.image.onload = function() {
    console.log("¡La imagen cargó correctamente!");
  };

  this.image.onerror = function() {
    console.log("No se pudo cargar la imagen");
  };

  this.image.src = "../IMG/pez.jpg";
}

Arrow.prototype.draw = function(context) {

  context.save();

  // Movemos el punto de origen al centro
  context.translate(this.x, this.y);

  // Rotamos
  context.rotate(this.rotation);

  // Dibujamos la imagen centrada
  context.drawImage(
    this.image,
    -this.image.width / 2,
    -this.image.height / 2
  );

  context.restore();
};