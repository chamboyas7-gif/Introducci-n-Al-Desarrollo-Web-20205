class Luces {
  constructor(color, ubicación, encendida) {
    this.color = color;
    this.ubicación = ubicación;
    this.encendida = encendida;
  }

  encender() {
    this.encendida = true;
    console.log(`La lámpara está encendida`);
  }

  apagar() {
    this.encendida = false;
    console.log(`La lámpara está apagada`);
  }

  cambiarColor(nuevoColor) {
    this.color = nuevoColor;
    console.log(`La lámpara ahora es de color ${this.color}`);
  }
}
