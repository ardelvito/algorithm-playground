// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
// 7 Kyu
// Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
    // your code here
    var sorted = arr.sort((a,b) => a-b);
    var midSize = arr.length / 2;  //3
    var result = 0;

    for (let index = 0; index < midSize; index++) {
        result += sorted[index] * sorted[sorted.length - 1 - index];
        
    }
    return result;

}

// function minSum(arr) {
//   return arr.sort( (a,b) => a-b )
//             .slice(0, arr.length/2)
//             .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
// }

// const minSum = arr =>
//   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

console.log(minSum([12,6,10,26,3,24]));