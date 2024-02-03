// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
// 6 kyu
// Find The Parity Outlier

function findOutlier(integers){
    evenArr = [];
    oddArr = [];
    integers.filter(element => element % 2 == 0 ? evenArr.push(element) : oddArr.push(element));
    return evenArr.length > oddArr.length ? oddArr[0] : evenArr[0]
}

// function findOutlier(integers){
//     var oddCounter = 0;
//     var evenCounter = 0;
//     var command = '';
//     for (let index = 0; index < integers.length; index++) {
//         if(integers[index] % 2 == 0){
//             evenCounter += 1;
//         }
//         else{
//             oddCounter += 1;
//         }

//         if(evenCounter > oddCounter && oddCounter != 0){
//             command = 'odd';
//         }
//         else if(oddCounter > evenCounter && evenCounter != 0){
//             command = 'even';
//         }
//     }


//     for (let index = 0; index < integers.length; index++) {
//         if(command == 'odd' && integers[index] % 2 != 0){
//             return integers[index];
//         }
//         else if(command == 'even' && integers[index] % 2 == 0){
//             return integers[index];
//         }
        
//     }


// }

// function findOutlier(integers) {
//     let evenCount = 0;
//     let oddCount = 0;
//     let evenNumber, oddNumber;

//     for (let num of integers) {
//         if (num % 2 === 0) {
//             evenCount++;
//             evenNumber = num;
//         } else {
//             oddCount++;
//             oddNumber = num;
//         }

//         if (evenCount > 1 && oddCount === 1) {
//             return oddNumber;
//         } else if (oddCount > 1 && evenCount === 1) {
//             return evenNumber;
//         }
//     }

// }
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));