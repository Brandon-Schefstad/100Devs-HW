//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
 function MakeCharacter(age, color, orientation, skillLevel){
     this.age = age
     this.color = color
     this.orientation = orientation
     this.skillLevel = skillLevel
     this.mainMove = function(){
         alert('Do a barrel roll')
     }
     this.goToSleep = function(){
         console.log('Sleepy Boy')
     }
     this.demographics = function(){
         console.log(`Character Age ${age}`)
     }
 }

let gary = new MakeCharacter(prompt('age?'),'red','gay','10.2')
