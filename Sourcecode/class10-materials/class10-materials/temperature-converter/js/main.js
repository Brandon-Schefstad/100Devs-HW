//Write your pseduo code first!
//click event (smurf)
    //Get the value from the input
    //Convert value
    //Output value

document.querySelector('#button').addEventListener('click', convert)

function convert() {
    //Get the value from the input
    const temp = document.querySelector('#inputValue').value
    console.log(temp)
    Convert value
    const convertedTemp = temp * 9/5 + 32
    let start = Number(document.querySelector('#inputValue').value)
    console.log(start)
    Output value
    console.log('Temperature', convertedTemp)
    for (start < 120); {
        start = start + 1
        document.querySelector('#resultField').innerText = start;
    }
    document.querySelector('#resultField').innerText = "Result:" + convertedTemp
    return;
}
// WARNING: Error message of unidentified token. No clue
