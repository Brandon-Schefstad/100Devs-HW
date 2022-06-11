// Array Methods:

// 1. Camelize
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// CODE
// function camelize(string) {
// 	let array = string.split('');
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === '-') {
// 			array[i + 1] = array[i + 1].toUpperCase();
// 		}
// 	}
// 	array = array.filter((x) => filterHelper(x));
// 	return array.join('');
// }

// function filterHelper(x) {
// 	return x !== '-';
// }

// console.log(camelize('-webkit-transition'));

// 2. Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.
// 11.
// 12.
// 13.
