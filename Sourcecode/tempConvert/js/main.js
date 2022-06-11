
// Get input
// convert input
// display input

document.querySelector('button').addEventListener('click', convert);

function convert(){
    const startTemp = document.querySelector('input').value
    let converted = (startTemp - 32)*5/9
    document.querySelector('#resultField').innerText = `Resulting Temperature is ${converted}° Celsius`
}
