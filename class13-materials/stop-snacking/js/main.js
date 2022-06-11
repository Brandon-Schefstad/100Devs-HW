//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', snacks)

function snacks(){
    let limit = document.querySelector('input').value
    for (let i = 1; i<=limit;i++){
        document.clear('#stops')
        document.querySelector('#stops').innerText += 'STOP! \n'
    }
}
