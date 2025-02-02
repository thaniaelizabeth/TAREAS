// console.log("Prueba de conexión");


// ================== EJERCICIO 1 ====================
// Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence."];

// ----------- Solución 1 con join () ---------------------
/**
 * Esta es una función que toma los elementos strings de un arreglo y através de join() los concatena con un espacio " " y devuelve un string.
 * @param {object} arreglo 
 * @returns {string}  
 */
function printOutString( arreglo ) {
  return arreglo.join(" ");  
}

console.log( printOutString(arr) );
// console.log(arr);


// ------------ Solucion 2 con ciclo for ------------------
/**
 * Esta función concatena los elementos strings de un arreglo a través de un ciclo for y devuelve un string.
 * @param {object} arreglo 
 * @returns {string} nuevoArreglo 
 */
const imprimirCadena = arreglo => {
  let nuevoArreglo = [];
  for ( let i = 0; i < arreglo.length; i++ ){
    nuevoArreglo += `${arreglo[i]} `; 
  }
  return nuevoArreglo;
}

console.log( imprimirCadena(arr) );
// console.log(arr);

