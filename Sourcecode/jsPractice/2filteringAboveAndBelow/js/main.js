// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//
// The function should not modify the array. It should return the new array.

arr = []
for (i=0;i<100;i++){
    arr[i] = i
}

function filterRange(arr,a,b,){
    let finalArray = arr.filter(item => item >=a && item<=b)
    return finalArray
}
alert(filterRange(arr, 15, 50))




// function filterRange(arr, a, b){
//     arr.slice(a,b+1)
// }

//
// function filterRange(arr, a, b){
//     let finalArray=[]
//     for (i=0; i<arr.length;i++){
//         if (arr[i]>= a){
//             finalArray.unshift(arr[i])
//
//         }else if (arr[i]<=b){
//             finalArray.unshift(arr[i])
//
//         }
//     }
//     return finalArray
// }

// let testArray=[1,2,3,4,5,6,7,8,9]
// console.log(filterRange(testArray,4,9))
