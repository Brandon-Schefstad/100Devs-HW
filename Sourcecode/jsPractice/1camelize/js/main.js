function camelize(inputStr){
    // Split string into array
    let newArr = inputStr.split('')
    // Identify hyphens
    for (i=0; i<=newArr.length;i++){
        // Make the letter after uppercase
        if (newArr[i]==='-'){
            newArr[i+1]=newArr[i+1].toUpperCase()
            newArr.splice(i,1)
        // remove hyphen at index
    }
    // Join together
    }return newArr.join('')
}
console.log(camelize('background-color'))
console.log(camelize('george-the-saint-bernard'))
