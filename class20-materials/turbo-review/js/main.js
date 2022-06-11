// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveAffirmation = "You can do this!"
console.log(positiveAffirmation)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let finalWord = ['a','r','r','a','y']
console.log(finalWord.join(''))
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function bigBangTheory(){
    let randomizer = Math.random()
    if (randomizer <= 0.2){
        return "Rock"
    }else if (randomizer <=0.4){
        return "Scissors"
    }else if (randomizer <= 0.6){
        return "Paper"
    }else if (randomizer <= 0.8){
        return "Spock"
    }else{
        return "Lizard"
    }
}
// let i = 0
// while (i<10){
//     console.log(bigBangTheory())
//     i= i+1
// }
// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function gameTime (userChoice){
    let botChoice = bigBangTheory()
    userChoice = userChoice.toLowerCase()
    botChoice = botChoice.toLowerCase()
    // if (userChoice != 'spock' && 'rock' && 'paper'&&'scissors'&&'lizard'){
    //     alert('BAD')
    // }
    if (userChoice === botChoice){
        alert(`User chose ${userChoice} and computer chose ${botChoice} Tie`);
    }else if (userChoice==='rock'&&botChoice===('lizard'||'scissors)'|| userChoice==='lizard'&&botChoice===('spock'||'paper')|| userChoice==='spock'&&botChoice===('scissors'||'rock')|| userChoice==='scissors'&&botChoice===('paper'||'lizard')|| userChoice==='paper'&&botChoice===('spock'||'rock'))){
        alert(`User chose ${userChoice} and computer chose ${botChoice} You win!`)
    }else{
        alert(`User chose ${userChoice} and computer chose ${botChoice} You lose!`)
    }
}

gameTime('paper')
