// https://www.codewars.com/kata/64d482b76fad180017ecef0a
// 6 Kyu
// Divide and Conquer

function consecutiveNums(arr, groupLen){
    var mainArr = [];
    var numToSwitch = 0;
    var idxToSwitch = 0;
    var helper = 0;

    if(groupLen == 1){
        return true;
    }
    if(arr.length % groupLen == 0){
        arr.sort((a,b) => a-b);
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j]+1 == arr[j+1]) {
                    mainArr.push(arr[j])
                }
                else if(arr[j]+1 != arr[j+1]){
                    mainArr.push(arr[j]);
                    numToSwitch = arr[j+1];
                    idxToSwitch = j+1;

                    for (let k = idxToSwitch; k < arr.length; k++) {
                        if(numToSwitch + 1 == arr[k] ){
                            helper = arr[idxToSwitch];
                            arr[idxToSwitch] = arr[k];
                            arr[k] = helper;
                            mainArr.push(arr[idxToSwitch]);
                            break;
                        }
                    }
                }
            }
            
        }
        return mainArr
    }
    else{
        return false;
    }
}

// console.log(consecutiveNums([1, 3, 5], 1));
console.log([1, 2, 3, 6, 2, 3, 4, 7, 8].sort((a,b) => a-b))
console.log(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
// console.log(consecutiveNums([1, 2, 3, 4, 5], 4));
// console.log(consecutiveNums([5, 6, 3, 4], 2))