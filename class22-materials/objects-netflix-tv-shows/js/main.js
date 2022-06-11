//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TVShows{
    constructor(genre, rating, main_actor, release_date){
        this.genre = genre
        this.rating = rating
        this.main_actor = main_actor
        this.release_date = release_date
    }
    start(){
        console.log ('Starting TV Show')
    }end(){
        console.log('Ending TV Show');
    }
}

let theApprentice = new TVShows('Horror',4.2,'Jake Gyllenhall','2012')
console.log(theApprentice)
