
function isValidIP(str) {
    var splitter = str.split('.');

    
    if (splitter.some(element => element.trim() !== element)) {
        return false;
    }
    
    var allIntegers = splitter.every(element=> Number.isInteger(parseInt(element, 10)));
    // return splitter;
    if(allIntegers && splitter.length == 4){
        
        splitter = splitter.map(element => element.trim());

        if (splitter.some(element => element === '')) {
            return false;
        }

        if (splitter.some(element => element < 0 || element >= 256)) {
            return false;
        }

        if (splitter.some(element => !/^(0|[1-9]\d*)$/.test(element))) {
            return false;
        }

        if (Number(splitter[1]).toString() !== splitter[1]) {
            return false;
        }

        return true;

    }
    else{
        return false;
    }
}
module.exports = isValidIP;

console.log(isValidIP('256.168.0.1'));
console.log(isValidIP('192.168.0.1'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP(' 1.2.3.4'));
console.log(isValidIP('136.174.136.172b'));
console.log(isValidIP('01.02.03.04'));
console.log(isValidIP('138.58.00.109'));

// function isValidIP(str) {
//   return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }

// function isValidIP(str) {
//   return str.split('.').filter(function(v) {return +v <= 255 && +v >= 0 && v.length == String(+v).length;}).length == 4;
// }//I love one-liners

// console.log(isValidIP('abc.def.ghi.jkl'));
