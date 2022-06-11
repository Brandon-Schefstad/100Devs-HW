//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function clone(newArr){
    let copy = []
    for (i=0; i<newArr.length;i++){
        if (newArr[i]%2===0)
        copy.push(newArr[i])
    }
    console.log(copy)
}
