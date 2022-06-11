//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const reducer = (previousValue, currentValue) => previousValue+currentValue
function sum(newArr){
    return newArr.reduce(reducer)
}


console.log(sum([1,2,3,4,5,6,7,8,9,10]))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function square(newArr){
    const arrMap = newArr.map(x => x**2)
    return arrMap
}
console.log(square([1,2,3,4,5,6,7,8,9]))
//Create a function that takes string
//Print the reverse of that string to the console
function reverseReverse(string){
    const firstArray = string.split('')
    const secondArray = []
    let indexer = -1
    for (let i = firstArray.length; i>=0;i--){
        secondArray[indexer] = firstArray[i]
        indexer = indexer + 1
    }
    return secondArray
}

console.log (reverseReverse('Trans Rights'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string){
    string = string.toLowerCase()
    const newArr = string.split('')
    let i = 0
    let reverseI = 1
    do {
    if (newArr[i]===newArr[newArr.length-reverseI]){
        console.log(`Checking letter ${newArr[i]}`)
        i+=1
        reverseI+=1
    }else{
        console.log(`${string} is not a palindrome`)
        return
    }
} while (i<(newArr.length)/2)
console.log(`${string} is a palindrome`)
}
palindrome(prompt('What word would you like to check?'))
