//Arrays

//Create and array of tv shows. Loop through and print each show to the console

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

let tvShows = ['Friends','Spongebob','Yellow Jackets','Days of Our Lives','Riverdale']
tvShows.forEach(x => console.log(x))

// let numbers = [2, 3, 5, 7, 9, 10, 11, 12, 13, 15, 16, 20]
//     const evenNumbers=[]
//     // numbers.forEach(element => if (element%2===0) => evenNumbers = numbers.map())
//     for (let i = 0; i<=numbers.length; i++){
//         if (numbers[i]%2===0){
//             evenNumbers.push(numbers[i])
//         }
//     }
// console.log(evenNumbers)
// let numbers2 = [2, 3, 5, 7, 9, 10, 11, 12, 13, 15, 16, 20]
// function onlyEvens(arr){
//     return arr.filter(num=>num%2===0)
// }
// alert(onlyEvens(numbers2))
function sumDos(ax){
    ax.sort((a, b) => a-b)
    console.log(ax)
    alert(ax[1].value + ax[-2].value)
}
sumDos([6, 4, 1, 15, 5, 7, 12, 17, 14, 8, 3, 20, 9, 18, 16])
