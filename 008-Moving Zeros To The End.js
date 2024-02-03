// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// 5 kyu
// Moving Zeros To The End

function moveZeros(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === 0){
            arr.splice(index, 1);
            arr.push(0);
        }
        
    }
    return arr;
}

function moveZeros(arr) {
    arr.forEach(element => {
        if(element === 0){
            var removedIndex = arr.indexOf(element);
            arr.splice(removedIndex, 1);
            arr.push(0);
        }
    });
    return arr;
}

// function moveZeros(arr) {
//     let nonZeros = arr.filter(element => element !== 0);
//     let zeros = arr.filter(element => element === 0);
//     return nonZeros.concat(zeros);
// }

// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
