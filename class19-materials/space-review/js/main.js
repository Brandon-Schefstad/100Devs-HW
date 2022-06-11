//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const reducer = (previousValue, currentValue) => previousValue+currentValue
function sum(sumArr){
    return sumArr.reduce(reducer)
}
console.log(sum([1,2,3,4,5]))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function exponent (expArr){
    const finalArr = expArr.map(a => a*a)
    return finalArr
}
console.log(exponent([1,2,3,4,5]));
//Create a function that takes string
//Print the reverse of that string to the console
function reverse (str){
    const array = str.split('')
    console.log(array)
    let finalArr = []
    for (let i = 1; i<=array.length; i++){
        finalArr[i] = array[array.length-i]
    }
    let dumpster = finalArr.shift(finalArr[0])
    return finalArr
}
console.log(reverse("Hello"));
console.log(reverse('Goodbye!'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str){
    const array = str.split('')
    for (let i = 0; i<array.length;i++){
        console.log(`Checking ${array[i]}`);
        let firstLetter = array[i]
        let secondLetter = array[array.length-1-i]
        console.log(firstLetter,secondLetter);
        if (firstLetter===secondLetter){
            console.log("so far so good!");
        }else{

        }
    }
}
console.log(palindrome("kayak"));
