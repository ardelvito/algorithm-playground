// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// 6 Kyu
// Make the Deadfish Swim

// Return the output array, and ignore all non-op characters
function parse( data ){
    var arr = [];
    var initVal = 0;
    var convToArr = data.split('');
    convToArr.forEach(element => {
        if(element == 'i'){
            initVal += 1;
        }
        else if(element == 's'){
            initVal **= 2;
        }
        else if(element == 'd'){
            initVal -= 1;
        }
        else if(element == 'o'){
            arr.push(initVal);
        }
    });

    return arr;

}

// function parse(data) {
//   let res = [];

//   data.split('').reduce((cur, s) => {
//     if (s === 'i') cur++;
//     if (s === 'd') cur--;
//     if (s === 's') cur = Math.pow(cur, 2);
//     if (s === 'o') res.push(cur);
    
//     return cur;
//   }, 0);
//   return res;
// }

// Return the output array, and ignore all non-op characters
// function parse( data ) {  
//   var v = 0, ret = []
//   for (var c of data) {
//     switch (c) {
//       case 'i' : v++;         break;
//       case 'd' : v--;         break;
//       case 's' : v=v*v;       break;
//       case 'o' : ret.push(v); break;
//     }
//   }
//   return ret;
// }

console.log(parse('iiisdoso'));