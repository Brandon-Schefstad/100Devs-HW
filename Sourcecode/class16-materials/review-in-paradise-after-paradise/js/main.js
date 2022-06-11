// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function hello(newArr){
    let length = newArr.length
    if(newArr[0]>newArr[length-1]){
        alert('hi')
    }else if (newArr[0]<newArr[length-1]){
        alert('bye')
    }else{
        alert('We close in an hour')
    }
}
hello([6,4,6])
