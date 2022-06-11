//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Cheaper By The Dozen','Gone Girl','Dune']
let lengthMovies = movies.length
for (i=0; i<lengthMovies;i++){
    document.querySelector('h2').innerText += ` ${movies[i]}. `
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)
numbers.forEach((x,i) => numbers[i] = numbers[i] * 3)
console.log(numbers)
//Find the average of all the numbers from question three
let lengthNumbers = numbers.length
let total
for (i=0; i<lengthNumbers;i++){
     total = numbers[i] + numbers[i+1]
    console.log(total)
}
