// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
// let softDrink = 'Cola'
// //Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// let fruit = 'Apple, Grapefruit, Orange'
// if (fruit.includes('Apple')){
//     alert('PRESENT')
// }

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    let x = Math.random()
    if (x<0.33){
        return 'rock'
    }else if (x<0.66){
        return 'paper'
    }else{
        return 'scissors'

}
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function gameTime(choice){
    let computerChoice = rps()
    choice=choice.toLowerCase()
    document.querySelector('h1').innerText = `Computer chose ${computerChoice}.`
    document.querySelector('h2').innerText = `You chose ${choice}`
    if (choice === computerChoice){
        document.querySelector('h3').innerText = ' Result: Tie!'
    }else if (choice == 'paper'){
        if (computerChoice == 'rock'){
            document.querySelector('h3').innerText = ' Result: You win!'
        }else{
            document.querySelector('h3').innerText = ' Result: You lose!'
        }
    }else if (choice =='rock'){
        if (computerChoice =='scissors'){
            document.querySelector('h3').innerText = ' Result: You win!'
        }else{
            document.querySelector('h3').innerText = ' Result: You lose!'
        }
    }else{
        if (computerChoice == 'paper'){
            document.querySelector('h3').innerText = ' Result: You win!'
        }else{
            document.querySelector('h3').innerText = ' Result: You lose!'
        }
    }

}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function arrayGame(newArr){
    for (i=0; i<newArr.length;i++){
        gameTime(newArr[i])
    }
}
arrayGame([rps(),rps(),rps()])
