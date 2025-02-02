// console.log("Prueba de conexión");


// ================== EJERCICIO 3 ===================
/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */


// ------------- Solución 1 con reduce () --------------

let arr3 = [1, 2, 3, 4];

/**
 * Esta función toma los números de un arreglo y através de reduce() 1) los suma y 2) los multiplica. Devuelve un string con ambos resultados.
 * @param {object} arreglo 
 * @returns {string}
 */
const sumaYProducto = arreglo => {
	return `The sum is ${ arreglo.reduce( (a, b) => a + b ) }. \nThe product is ${ arreglo.reduce( (a, b) => a * b ) }.`;
}

console.log( sumaYProducto( arr3 ) );



// -------------- Solución 2 con for of -------------------
/**
 * Esta función toma los números de un arreglo y a través de un ciclo for 1) los suma y 2) los multiplica. Devuleve un string con ambos resultados.
 * @param {object} arreglo 
 * @returns {string} 
 */
const sumaYProducto2 = arreglo => {
	let suma = 0;
	let producto = 1;
	for ( const indice of arreglo ) {
		suma += indice;
		producto *= indice;
	}
	return ( `The sum is ${suma}.\nThe product is ${producto}.` );
}

console.log( sumaYProducto2( arr3 ) );