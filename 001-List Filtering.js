// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// 7 kyu
// List Filtering

function filter_list(l) {
  // Return a new array with the strings filtered out
    const newArray = [];
    for(let i=0; i<l.length; i++){
        if(typeof(l[i]) == 'number'){
            newArray.push(l[i])
        }
    }
    return newArray
}

// function filter_list(l) {
//     return l.filter(v => typeof v == "number")
// }

console.log(filter_list([1,'a','b',0,15]));