//Write your pseduo code first!
//
// Get a temperature
// convert the temperature
// output the temp

document.querySelector('#button').addEventListener('click', convert);

function convert(){
    const start = document.querySelector('#inputTemp').value
    converted = start * 9/5 + 32
    console.log(converted)
    document.querySelector('#display').innerText = `Resulting Temperature is ${converted} Degrees Farenheit`
}
