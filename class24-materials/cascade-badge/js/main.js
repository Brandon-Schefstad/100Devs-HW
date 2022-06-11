//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let pokemonTeam = ['Arcanine','Teddiursa','Ninetales','Decidueye','Primape','Primarina']
console.log(pokemonTeam.reverse())
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function powers(squares, cubes){
    let squared = squares.map(x => x**2)
    let cubed = cubes.map(x => x**3)
    console.log(squared)
    console.log(cubed);
    if (squared.reduce((a, c) => a+c, 0) > cubed.reduce((a,c) => a+c, 0)){
        return true
    }else{
        return 'false'
    }
}
console.log(powers([25],[1]))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexMultiply(array){
    let newArr=[]
    for (let i = 0; i<array.length; i++){
        if (array[i]%[i]===0){
            newArr.push(array[i])
        }
    } return newArr
}

console.log(indexMultiply([68, -1, 1, -7, 10, 10]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
