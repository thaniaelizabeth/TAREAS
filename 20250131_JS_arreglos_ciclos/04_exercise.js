// console.log("Prueba de conexión");


// ================== EJERCICIO 4 ===================
/* let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

// ----------------------- Solucion 1 con filter() e includes() --------------------------

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

/**
 * A través de esta función con filter() e includes() se comparan los elementos de dos arreglos y se filtran los elementos en común devolviendolos en otro arreglo.
 * @param {object} arreglo1 
 * @param {object} arreglo2 
 * @returns {object}
 */
const compararCursos = ( arreglo1, arreglo2 ) => {
  return arreglo1.filter( (curso) => arreglo2.includes( curso ) );
}

console.log( compararCursos( student1Courses, student2Courses ) );



// ------------------ Solución 2 con ciclo for --------------------
/**
 * En esta función se comparan y filtran los elementos de dos arreglos y se devuleven los elementos en común en un nuevo arreglo. 
 * @param {object} arreglo1 
 * @param {object} arreglo2 
 * @returns {object} cursosEnComun
 */
const compararCursos2 = ( arreglo1, arreglo2 ) => {
  let cursosEnComun = [];
  for ( let i = 0; i < arreglo1.length; i++) 
    for (let j = 0; j < arreglo2.length; j++) 
      if ( arreglo1[i] === arreglo2[j] ) 
        cursosEnComun.push( arreglo1[i] );
return cursosEnComun;
}

console.log( compararCursos2 ( student1Courses, student2Courses ) );
