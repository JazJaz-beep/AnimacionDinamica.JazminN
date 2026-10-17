
function Navecita() {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.showFlame = false;

  this.width = 60;
  this.height = 60;

  // Cargar sprites una sola vez
  this.nave = new Image();
  this.nave.src = "naveHamster.png";

  this.naveflama = new Image();
  this.naveflama.src = "Hamster.png";
}

Navecita.prototype.draw = function(context) {
  context.save();

  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // Dibujar nave
  if (this.nave.complete && this.nave.naturalWidth > 0) {
    context.drawImage(
      this.nave,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  // Dibujar llama
  if (
    this.showFlame &&
    this.naveflama.complete &&
    this.naveflama.naturalWidth > 0
  ) {
    context.drawImage(
      this.naveflama,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  context.restore();
};
