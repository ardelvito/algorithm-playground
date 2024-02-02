// https://www.codewars.com/kata/54edbc7200b811e956000556/javascript
// 8 kyu
// Counting sheep...

function countSheeps(sheep) {
  // TODO
    let counter = 0;
    sheep.forEach(element => {
        if(element){
            counter += 1;
        }
    });

    return counter;
}

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))