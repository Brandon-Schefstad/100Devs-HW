//---Easy
//create a function that adds two numbers and alerts the difference
function addTwo(num1,num2){
    return Number(num1+num2)
}
//create a function that divides two numbers and console logs the quotient
function divide (num1,num2){
    return Number(num1/num2)
}
//create a function that multiplys four numbers and returns the product
function product (n1,n2,n3,n4){
    return n1*n2*n3*n4
}
//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers
function complex(n1,n2,n3,n4){
    n1 = n1+n2
    n3 = n3-n4
    return n1/n3
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(n1,n2,n3,n4){
    n1 = n1*n2
    if (n1>100){
        console.log(n3+n4)
    }else if (n1<100){
        console.log(n4-n3)
    }else{
        n1 = n1*n3
        console.log(n1/n4)
    }
}
