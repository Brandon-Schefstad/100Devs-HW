//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
document.querySelector('h1').addEventListener('click',resolution)
function resolution(){
    let idea = document.querySelector('input').value
for (i=1;i<=365;i++){
    document.querySelector('#letsGo').innerText += idea
}
}
//Bonus can you make it print your resolution 365 times to the DOM?
