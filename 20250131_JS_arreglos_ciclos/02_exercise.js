// console.log("Prueba de conexión");


// ================== EJERCICIO 2 ====================
/* Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */


// ---------------- Solución 1 con map() --------------------------

let arr2 = [1, 2, 4, 5];

const duplicarNumerosArreglo = arreglo => {
  return arreglo.map( ( i ) => i * 2 );
}
console.log( duplicarNumerosArreglo( arr2 ) );
// console.log(arr2);


// ----------------- Solución 2 con ciclo for ------------------------

const duplicarNumerosArray = arreglo => {
  let nuevoArreglo = [];
  for ( let i = 0; i < arreglo.length; i++ ){
    nuevoArreglo.push( arreglo[i] * 2) ;
  } 
  return nuevoArreglo;
}

console.log( duplicarNumerosArray( arr2 ) );