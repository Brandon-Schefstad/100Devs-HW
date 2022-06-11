//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', age)
function age() {
    const inputAge = document.querySelector('#danceDanceRevolution').value
    if (inputAge<16){
        document.querySelector('p').innerText = 'You cannot drive!'
    }else if (inputAge<18){
        document.querySelector('p').innerText = 'How can you hate from outside the club, you cannot even get in!'
    }else if (inputAge<21){
        document.querySelector('p').innerText = 'You may not drink.'
    }else if (inputAge<25){
        document.querySelector('p').innerText = 'You are unable to rent cars affordably.'
    }else if(inputAge<30){
        document.querySelector('p').innerText = 'You are unable to rent FANCY card affordably.'
    }else{
        document.querySelector('p').innerText = 'Life is bleak.'
    }

}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
