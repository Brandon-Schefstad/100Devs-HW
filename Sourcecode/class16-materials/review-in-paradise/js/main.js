// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "chicken"
chicken = "chicken"
alert(chicken)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "Testing!"
let letter = string.charAt(1)
alert(letter)

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function math(a,b,c){
    return (a*b)/c
}
alert(math(1,4,2))
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cube(a){
    alert(a*a*a)
}
cube(3)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(date){
    if (date.toLowerCase == "june"|| "july"||"august"){
        alert('YAY')
    }else{
        alert('BOO')
    }
}
month("June")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loop(a){
    for (let i=1; i<=a;i++){
        if (i%5==0){
            i = i
        }else{
        console.log(i)
        }
    }
}
