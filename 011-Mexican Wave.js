// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// 6 Kyu
// Mexican Wave

function wave(str){
  // Code here
      // Code here
    var array = [];
    var word = '';
    var allWords =  '';
    var upperChar = '';
    var leftChar = '';
    var rightChar = '';

    for (let index = 0; index < str.length; index++) {
        
        if(str[index] == ' '){
            continue;
        }
        else{
            upperChar = str[index].toUpperCase();
            if(index > 0){
                leftChar += str.slice(0, index);
                rightChar += str.slice(index+1, str.length);
                word += leftChar;
                word += upperChar;
                word += rightChar;

            }
            else{
                word += upperChar;
                word += str.slice(index+1, str.length);

            }
        }

        array.push(word);
        word = '';
        leftChar = '';
        rightChar = '';
        
    }
    return array;
} 


console.log(wave("two words"))

// function wave(str){
//     let result = [];
    
//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });
    
//     return result;
// }

// function wave(str){
//   let newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let copy = str.split('');
//     if(copy[i] !== ' ') {
//     copy[i] = copy[i].toUpperCase()
//     newArr.push(copy.join(''))
//     }
//   }
//   return newArr
// }