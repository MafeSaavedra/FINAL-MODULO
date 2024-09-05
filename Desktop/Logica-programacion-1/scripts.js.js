const prompt = require('prompt-sync')();

// Obtener  números 
let primerNumero = Number(prompt("Ingrese el primer número:"));
let segundoNumero = Number(prompt("Ingrese el segundo número:"));
let tercerNumero = Number(prompt("Ingrese el tercer número:"));

    let numeros = [primerNumero, segundoNumero, tercerNumero];

    // Ordenar los números de mayor a menor
    let ordenDescendente = [...numeros].sort((a, b) => b - a);
    // Ordenar los números de menor a mayor
    let ordenAscendente = [...numeros].sort((a, b) => a - b);

    // Imprimir los números ordenados en la consola
    console.log("Ordenados de mayor a menor:", ordenDescendente);
    console.log("Ordenados de menor a mayor:", ordenAscendente);

    // Encontrar el número del centro
    let numeroDelCentro = ordenAscendente[1]; // En un array de 3 números ordenados, el número del centro es el segundo elemento

    // Imprimir el número del centro
    console.log("El número del centro es:", numeroDelCentro);

    // Verificar si todos los números son iguales
    if (primerNumero === segundoNumero && segundoNumero === tercerNumero) {
        console.log("Todos los números son iguales.");
    }



