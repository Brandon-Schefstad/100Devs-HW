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
// Array of objects, each is a user.
// Want to go into each object, grab the name, and put it into another Array. Will use map method

// CODE #######
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };
// let users = [john, pete, mary];
// function mapToNames(array) {
// 	const newArr = array.map((x) => x.name);
// 	return newArr
// }
// console.log(mapToNames(users));
// 8.Map To Objects
// Have an array of objects {name,surname,id}
// Want to return different objects {fullname,id} by:
// Iterating over array, and for each, constructing a new key/value pair and deleting the old ones

// let john = { name: 'John', surname: 'Smith', id: 1 };
// let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
// let mary = { name: 'Mary', surname: 'Key', id: 3 };
// let users = [john, pete, mary];

// function mapToObject(array) {
// 	array.forEach((x) => {
// 		x.fullName = x.name + ' ' + x.surname;
// 		delete x.name;
// 		delete x.surname;
// 	});
// 	return array;
// }

// console.log(mapToObject(users));

// CODE #######
// 9. Sort users by age
// Sort an array of objects by a value
//  CODE #######
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let arr = [pete, john, mary];
// function sortByKey(array, key) {
// 	return array.sort(function (a, b) {
// 		let x = a[key];
// 		let y = b[key];
// 		return x < y ? -1 : x > y ? 1 : 0;
// 	});
// }
// console.log(sortByKey(arr, 'age'));

// 10. Shuffle an array
// ForEach Element, pick another random index in the array and swap the two elements by reassignment.

// Select other element (math.random)
// swap two elements

// CODE #######
// function shuffle(array) {
// 	array.forEach((x) => {
// 		const index = array.indexOf(x);
// 		let reassignment = Math.floor(Math.random() * (array.indexOf(x) + 1));
// 		// const holding = x;
// 		// const holding2 = array[reassignment];
// 		// array[reassignment] = holding;
// 		// array[array.indexOf(x)] = holding2;
// 		// [x,array[]]
// 		console.log(index, reassignment);
// 		[array[index], array[reassignment]] = [
// 			array[reassignment],
// 			array[index],
// 		];
// 	});
// 	return array;
// }

// 11. Get average age
// Map ages to Array, average array (add, divide by array.length)
// CODE #######
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 29 };

// let arr = [john, pete, mary];
// function getAverageAge(arr) {
// 	const ageArray = arr.map((x) => x.age);
// 	let totalAge = ageArray.reduce((sum, current) => sum + current, 0);
// 	return totalAge / arr.length;
// }
// console.log(getAverageAge(arr));

// 12.Filter unique array members
// Initialize a variable, remove it from Array, if array still has, not unique.
// CODE #######
// function unique(arr) {
// 	const playArr = arr;
// 	let returnArr = [];
// arr.forEach((x) => {
// 	let checkArr = arr.slice(arr.indexOf(x));
// 	console.log(checkArr);
// 	console.log(checkArr.includes(x));
// 	if (checkArr.includes('Me')) {
// 		console.log('We have a winner!');
// 		returnArr.push(x);
// 	}
// });
// 	for (let i = 0; i < playArr.length; i++) {
// 		let checkArr = playArr.slice(i + 1);
// 		console.log(checkArr.includes(playArr[i]));
// 		if (!checkArr.includes(playArr[i])) {
// 			returnArr.unshift(playArr[i]);
// 		} else {
// 			continue;
// 		}
// 	}
// 	return returnArr;
// }
// console.log(
// 	unique([
// 		'Hare',
// 		'Krishna',
// 		'Hare',
// 		'Krishna',
// 		'Krishna',
// 		'Krishna',
// 		'Hare',
// 		'Hare',
// 		':-O',
// 	])
// );

// 13.
// CODE #######
