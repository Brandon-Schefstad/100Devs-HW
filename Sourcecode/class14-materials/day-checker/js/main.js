//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study
document.querySelector('h1').addEventListener('click',schedule)

function schedule(){
    let day = document.querySelector('#whatDay').value
    let house = document.querySelector('#whatHouse').value
    console.log(day,house)
    let notification
    if (day == 'tuesday'|| day == 'thursday'){
        notification = 'Why'
    }else if (day == 'saturday'){
        notification = 'You have office hours.'
    }else if (day == 'friday'&& house =='turing'){
        notification = 'You have private office hours.'
    }else if (day == 'wednesday' && house =='hopper'){
        notification = 'You have private office hours.'
    }else if (day == 'monday' && house=='hamilton'){
        notification = 'Book a 1on1.'
    }else{
        notification = 'Study!'
    }
    document.querySelector('p').innerText = notification
}
