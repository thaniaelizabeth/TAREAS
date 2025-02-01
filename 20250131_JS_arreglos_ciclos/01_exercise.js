// console.log("Prueba de conexión");


// ================== EJERCICIO 1 ====================
// Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence."];

// ----------- Solución 1 con join () ---------------------
function printOutString( arreglo ) {
  return arreglo.join(" ");  
}

console.log( printOutString(arr) );
// console.log(arr);


// ------------ Solucion 2 con ciclo for ------------------
const imprimirCadena = arreglo => {
  let nuevoArreglo = [];
  for ( let i = 0; i < arreglo.length; i++ ){
    nuevoArreglo += `${arreglo[i]} `; 
  }
  return nuevoArreglo;
}

console.log( imprimirCadena(arr) );
// console.log(arr);

