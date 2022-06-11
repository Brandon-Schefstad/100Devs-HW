//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// Wait for a click, then run assign
function getDrink(){
        let search = document.getElementById('userEntry').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
        })

        .catch(err =>{
            console.log(`error ${err}`);
        })

}


document.querySelector('#buttonTime').addEventListener('click', getDrink)
// Pull data from form, log it




if (names.length === 0){
   return "no one likes this"
 } else if (names.length === 1){
   return `${names[0]} likes this`
 } else if (names.length === 2){
   return `${names[0]} and ${names[1]} like this`
} else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
}else {
    return `${names[0]}, ${names[1]}, and ${names.length-2} others like this`
}
}
