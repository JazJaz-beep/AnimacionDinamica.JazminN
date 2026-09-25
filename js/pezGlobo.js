
function Pez() {

  this.x = 0;
  this.y = 0;

  this.color = "#ffff00";
  this.scaleX = 1;
  this.scaleY = 1;
  this.rotation = 0; 

  this.image = new Image();

  this.image.onload = function() {
    console.log("¡La imagen cargó correctamente!");
  };

  this.image.onerror = function() {
    console.log("No se pudo cargar la imagen");
  };

  this.image.src = "../IMG/pelota.png";
  // this.radius = this.pelota.width/2;
}

Pez.prototype.draw = function(context) {

  context.save();

  // Movemos el punto de origen al centro
  context.translate(this.x, this.y);

  // Rotamos
  context.rotate(this.rotation);

  context.scale(this.scaleX, this.scaleY);
  this.scaleX = 0.5;
  this.scaleY = 0.5;

  // Dibujamos la imagen centrada
  context.drawImage(
    this.image,
    -this.image.width / 2,
    -this.image.height / 2
  );

  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  //x, y, radius, start_angle, end_angle, anti-clockwise
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }

  context.restore();
};