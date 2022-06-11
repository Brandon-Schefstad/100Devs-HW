// *Variables*
// Create a variable and console log the value
let value = 4
console.log(value)

// Create a variable, add 10 to it, and alert the value
let plusTen = 12
console.log(plusTen + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtraction(n1, n2, n3, n4){
    console.log(n1-n2-n3-n4)
}
// Create a function that divides one number by another and returns the remainder
function modulus(n1,n2){
    console.log(n1%n2)
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1,n2){
    let sum = n1+n2
    if (sum > 50){
        console.log(sum)
        alert('JUMANJI')
    }else{
        alert('Backgammon')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1,n2,n3){
    let product = n1*n2*n3
    if (product%3 == 0){
        console.log('ZEBRA')
    }else{
        console.log('lion :(')
    }
}
