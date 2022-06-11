//--- Easy
//create a variable and assign it a number
let initial = 12

//minus 10 from that number
initial = initial-10
//print that number to the console
console.log(initial)
//--- Medium
//create a variable that holds a value from the input
document.querySelector('.clickMe').addEventListener('click',add)
function add(){
    let input = Number(document.querySelector('#danceDanceRevolution').value)
    //add 25 to that number
    input = input + 25
    //alert that number
    console.log(input)
    let total = initial + input
    console.log(total)
}

// // //--- Hard
// // //create a variable that holds the h1
// const mostImportant = document.querySelector('.clickMe')
// console.log(mostImportant)
// // //add an event listener to that element that console logs the sum of the two previous variables
// document.querySelector('.clickMe').addEventListener('click', sum)
