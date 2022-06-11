//Create an array of movies with at least three movies.
let movies = ['Cheaper By The Dozen', 'Gone Girl', 'Avengers']
//Using the array from above, store the first movie in a variable
let firstMovie = movies[0]
//Get the length of the original array and store it in a new variable
let length = movies.length
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastElement = movies.slice(-1)
console.log(movies)
console.log(firstMovie)
console.log(length)
console.log(lastElement)
