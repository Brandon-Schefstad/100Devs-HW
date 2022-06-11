// Array Methods:

// 1. Camelize
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// CODE #######
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
// PseudoCode:
// Filter for all numbers less than a being false
// Filter for all numbers greater than b being false

// combine both into one filter?
// return filteredArray

// CODE #######
// function filterRange(arr, a, b) {
// 	return arr.filter((x) => filterHelper(x, a, b));
// }
// function filterHelper(x, a, b) {
// 	return a <= x && x <= b;
// }
// console.log(filterRange([1, 2, 3, 4, 5, 6, 7], 1, 5));
// 3. Filter range "in place"
// CODE #######
// function filterRange(arr, a, b) {
// 	return arr.filter((x) => filterHelper(x, a, b));
// }
// function filterHelper(x, a, b) {
// 	return a <= x && x <= b;
// }
// console.log(filterRange([5, 3, 8, 1], 1, 4));
// 4. Sort in Decreasing Order:
// CODE #######
// function decreasingOrder(arr) {
// 	arr.sort(compare);
// 	return arr;
// }
// function compare(a, b) {
// 	if (a > b) return -1;
// 	if (a == b) return 0;
// 	if (a < b) return 1;
// }
// let arr = [5, 2, 1, -10, 8];
// console.log(decreasingOrder(arr));
// 5. Copy and Sort Array
// CODE #######
// function copyAndSortArray(arr) {
// 	let arrcopy = arr;
// 	console.log(arr);
// 	return arr, arrcopy.sort();
// }

// console.log(copyAndSortArray(['HTML', 'JavaScript', 'CSS']));
// 6. Create an extendable calculator
// PseudoCode
// Create calculator contructor
// Extend to a new object
// add methods (+,1,*,/,**)

// CODE #######
// class Calculator {
// 	constructor() {
// 		this.name = 'Calculator';
// 	}
// 	calculate(str) {
// 		let array;
// 		array = str.split(' ');
// 		console.log(array);
// 		switch (array[1]) {
// 			case '+':
// 				return parseInt(array[0]) + parseInt(array[2]);
// 				break;
// 			case '-':
// 				return parseInt(array[0]) - parseInt(array[2]);

// 				break;
// 			case '*':
// 				return parseInt(array[0]) * parseInt(array[2]);
// 				break;
// 			case '/':
// 				return parseInt(array[0]) / parseInt(array[2]);
// 				break;
// 			case '**':
// 				return parseInt(array[0]) ** parseInt(array[2]);
// 				break;
// 		}
// 	}
// }

// let powerCalc = new Calculator();
// console.log(powerCalc.calculate('3 * 4'));
// console.log(powerCalc);

// Got to 20 minutes, can hardcode the answer and will come back to it localStorage.

// 7. Map To Names

// CODE #######
// 8.
// CODE #######
// 9.
// CODE #######
// 10.
// CODE #######
// 11.
// CODE #######
// 12.
// CODE #######
// 13.
// CODE #######
