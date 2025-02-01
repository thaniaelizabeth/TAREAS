// console.log("Prueba de conexión");


// ================== EJERCICIO 6 ===================
/* Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100] */

const algoritmoBurbuja = arreglo => {
  for( let i = 0; i < arreglo.length; i++ ) {
    for ( let j = 0; j < arreglo.length - i - 1; j++ ){
      if ( arreglo[j] > arreglo[j + 1] ){
        let guardarNumero = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = guardarNumero;
      } 
    }
  } 
  return arreglo;
}

console.log( algoritmoBurbuja( [3, 6, 12, 5, 100, 1 ] ) );