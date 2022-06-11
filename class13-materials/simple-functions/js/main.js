// //---Easy
// //create a function that subtracts two numbers and alerts the difference
// function subtract(num1, num2){
//     console.log(num2-num1)
// }
// //create a function that divides three numbers and console logs the quotient
// function divideTriple(num1,num2,num3){
//     console.log(num1/num2/num3)
// }
// //create a function that multiplys three numbers and returns the product
// function multiplyTriple(num1,num2,num3){
//     return num1*num2*num3
// }
// //---Medium
// //create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addDivide (num1, num2, num3) {
    let sum = num1 + num2
    let quotient = sum%num3
    console.log(quotient)
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function complex(num1,num2,num3,num4){
    let product1 = num1*num2
    if (product1>100){
        productAdd = product1 + num3 + num4
        console.log(productAdd)
    }else if (product1<100){
        productSub = product1 - num3 - num4
        console.log(productSub)
    }else{
        product2 = (num1 * num2 * num3)/num4
        console.log(product2)
    }
}
