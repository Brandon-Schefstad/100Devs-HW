//--- Easy
//create a variable and assign it a boolean
// let bool = True

//create a variable and assign it a string that is a number
let strNum = "3"
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
let plusTen = 10+Number(strNum)

//print that number to the console
console.log(plusTen)
//--- Medium
//create a variable that holds a value from the input
document.querySelector('#mrRightNow').addEventListener('click',value)
function value(){
    let input = document.querySelector('input').value
    input = Number(input)+21
    console.log(input)
    return input
}
//add 21 to that number

//alert that number

//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('#mrRightNow').value
//add an event listener to that element that places the product of the two previous variables in the DOM
document.querySelector('#needSomeTLC').addEventListener('click', product)
function product(){
    console.log(input*plusTen)
}
