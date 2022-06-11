
// Get name of Anime
document.querySelector('button').addEventListener('click',function(){
    let search = document.querySelector('input').value
    console.log(search)
    document.querySelector('#name').innerText = search
    //Quote//
    fetch(`https://animechan.vercel.app/api/quotes/anime?title=${search}`)
    .then(response => response.json())
    .then(data => {
      const anime = (data.map(a => a))
      // let randomInt = Math.random()
      // console.log(randomInt);
      document.querySelector('#quote').innerText = `"${anime[0].quote}" - ${anime[0].character}`
    })
    // .then(quote => console.log(quote))
    //         .catch(err =>{
    //         console.log(`error ${err}`);
    //     })
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${search.toLowerCase()}`)
    .then(response => response.json())
    .then(data => {
        let anime1 = data.img
            document.querySelector('#image').src = anime1
    })
    // .then(quote => console.log(quote))
    //         .catch(err =>{
    //         console.log(`error ${err}`);
    //     })
}
)
