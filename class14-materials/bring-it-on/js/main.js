// *Variables*
// Create a variable and alert log the value
let logvar = 4
console.log(logvar)
// Create a variable, add -15 to it, and print the value to the console
let subFifteen = 25
console.log(subFifteen - 15)
// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function multiplys(n1,n2,n3,n4){
    console.log(n1*n2*n3*n4)
}
// Create a function that divides one number by another and returns the remainder plus 10
function divides(n1,n2){
    console.log(Number((n1%n2))+10)
}
// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function blockParty(n1,n2,n3){
    if (n1+n2+n3>1000){
        console.log('Block Party')
    }
}
// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function lincoln(n1,n2,n3,n4,n5){
    let quotient = Number(n1/n2/n3/n4/n5)
    console.log(quotient)
    if (quotient%5 == 0){
        alert('LINCOLN')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in
