
class Tinda {
    constructor(nombre, direccion, productos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.productos = productos;
    }
    presentar() {
        console.log(`La tienda ${this.nombre} está ubicada en ${this.direccion} y ofrece ${this.productos} de la mejor calidad.`);
    }
    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log(`La tienda ${this.nombre} ha cambiado su dirección a ${this.direccion}`);
    }
    agregarProducto(nuevoProducto) {
        this.productos.push(nuevoProducto);
        console.log(`La tienda ${this.nombre} ha agregado un producto nuevo: ${nuevoProducto}`);
    }
}