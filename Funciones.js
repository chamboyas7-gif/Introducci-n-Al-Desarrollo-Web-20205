// Transfromción de funciones a JavaScript

function saludar_usuario(nombre) {
    return "Hola, " + nombre + " Bienvenido al curso de programación!";
}
console.log(saludar_usuario("Johan"));

function repetir_texto(texto, veces) {
    return (texto+" ").repeat(veces);
}
console.log(repetir_texto("Hola ", 3));

function invertir_palabra(palabra){     
    return palabra.split("").reverse().join("");
}
console.log(invertir_palabra("Fútbol"));

function contar_vocales(texto){
    const texto1 = texto.toLowerCase().split("")
    let contador = 0
    const vocales = "aeiouáéíóú"
    for(let i of texto1){
        if(vocales.includes(i)){
            contador++
        }
    }
    return contador;
}

console.log(contar_vocales("Desarrollo Web"));

function mayusculas_y_minusculas(texto){
    const min = texto.toLowerCase()
    const may = texto.toUpperCase()
    const res = [min,may]
    return res;
}

console.log(mayusculas_y_minusculas("Me gusta mi clase"));

function promedio(numeros){
    let contador =0
    let suma =0
    for (let i of numeros){
        suma += i
        contador++
    }
    const res = suma/contador
    return res;
}

console.log(promedio([10,10,10,10]));

function maximo_y_minimo(numeros){
    const max = Math.max(...numeros)
    const min = Math.min(...numeros)
    const res = [max,min]
    return res;
}

console.log(maximo_y_minimo([1,2,3,4,5]));

function filtrar_pares(numeros){
    const pares = numeros.filter(num => num % 2 === 0);
    return pares;
}

console.log(filtrar_pares([1,2,3,4,5,6]));

function sumar_elementos_texto(lista){
    const res = lista.join(" ")
    return res;
}

console.log(sumar_elementos_texto(["Hola","mi","nombre","es","Johan"]));

function buscar_elmento(lista, elemento){
    return lista.includes(elemento);
}

console.log(buscar_elmento([1,2,3,4,5], 7));

function contar_palabras(texto){
    const arr = texto.split(" ")
    return arr.length;
}

console.log(contar_palabras("Estoy con mi amigo haciendo tarea"));

function duplicar_entradas(lista){
    const lista1 = lista.map(num => num * 2)
    return lista1;
}

console.log(duplicar_entradas([1,2,3]));

function capitalizar_palabras(texto){
    const palabras = texto.split(" ")
    const Capitalizadas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    return Capitalizadas.join(" ");     
}

console.log(capitalizar_palabras("hola mi nombre es johan"));

function mezclar_listas(lista1, lista2){
    const lista3 = []
    const tamaño = Math.min(lista1.length, lista2.length)
    for (let i = 0; i < tamaño; i++){
        lista3.push(lista1[i])
        lista3.push(lista2[i])
    }
    return lista3;
}

console.log(mezclar_listas([1,2,3,4,5], ['a','b','c']));

function contar_frecuencia(lista){
    const conteo = {}
    for (const item of lista){
        if (conteo[item]){
            conteo[item] += 1;
        }
        else{
            conteo[item] = 1;
        }
    }
    return conteo;
}
console.log(contar_frecuencia(['rojo', 'verde', 'azul', 'verde', 'rojo', 'amarillo']));