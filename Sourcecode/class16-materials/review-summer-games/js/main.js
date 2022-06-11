//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function product(newArr){
    let total = 1
    for (let i = 0; i<newArr.length; i++){
        total = newArr[i]*total
    }
    return total
}
console.log(product([3,3,5,4,4]))
