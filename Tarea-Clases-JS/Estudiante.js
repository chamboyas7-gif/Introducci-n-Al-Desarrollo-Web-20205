
class Estudiante {
    constructor(nombre, matricula, carrera) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.carrera = carrera;
    }

    presentar() {
        console.log(`Mi nombre es ${this.nombre}, con matricula ${this.matricula} y estudio la carrera de ${this.carrera}.`);
    }

    cambiarIdgraudado(nuevaMatricula) { // Supongamos que se cambia el ID al graduarse.
        this.matricula = nuevaMatricula;
        console.log(`${this.nombre} se ha graduado. Y ahora su ID es: ${this.matricula}`);
    }

    cambiarCarrera(nuevaCarrera) {
        this.carrera = nuevaCarrera;
        console.log(`${this.nombre} ha cambiado su carrera a ${this.carrera}`);
    }
}


