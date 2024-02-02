// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// 8 kyu
// Sum Arrays

// Sum Numbers
function sum (numbers) {
    "use strict";
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });    
    return sum;
};

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

console.log(sum([1, 5.2, 4, 0, -1]));