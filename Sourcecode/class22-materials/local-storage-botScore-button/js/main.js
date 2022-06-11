//Create a button that adds 1 to a botScore stored in localStorage
localStorage.setItem('botScore', 0)
let updatedValue = 0
document.querySelector('button').addEventListener('click',
   function() {
       updatedValue = updatedValue + 1
       localStorage.setItem('botScore', `${updatedValue}`)
       document.querySelector('h2').innerText = `Computer Score: ${updatedValue}`
   })
document.querySelector('#decrease').addEventListener('click',
    function(){
        updatedValue = updatedValue - 1
        localStorage.setItem('botScore', `${updatedValue}`)
        document.querySelector('h2').innerText = `Computer Score: ${updatedValue}`
    })
document.querySelector('#multiply').addEventListener('click',
        function(){
            updatedValue = updatedValue *2
            localStorage.setItem('botScore', `${updatedValue}`)
            document.querySelector('h2').innerText = `Computer Score: ${updatedValue}`
        })
