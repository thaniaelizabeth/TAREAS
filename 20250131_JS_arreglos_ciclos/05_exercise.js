// console.log("Prueba de conexión");


// ================== EJERCICIO 5 ===================
/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */


// ---------------- Solución con -------------------

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1
console.log( people );

//2
people.splice( 1, 1 );

//3
people.splice( 2, 1 );

//4
people.unshift( `${people.splice( 1, 1 )}` );

//5
people.push( 'Thania' );

//6
for ( let i = 0; i < people.length; i++ ) {
  console.log( people[i] );
  if ( people[i] === 'Maria' ) break;
}

//7
console.log( people.indexOf( 'Maria' ) );

// Result
console.log( people );

