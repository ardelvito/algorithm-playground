// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// 6 kyu
// Create Phone Number

function createPhoneNumber(numbers){
    var number = '(';
    for(let i=0; i<numbers.length;i++){
        number += numbers[i];
        
        if(i == 2){
            number += ') ';
        }
        if(i == 5){
            number += '-'
        }

    }

    return number;
}

// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
//   return format;
// }

// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') ' 
//       + numbers.substring(3, 6) 
//       + '-' 
//       + numbers.substring(6);
// }


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));