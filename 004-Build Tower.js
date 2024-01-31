// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// 6 kyu
// Build Tower

function towerBuilder(nFloors) {
  // build here
    let array = [];
    let word = "";
    let blankCounter = 0;
    let starCounter = 0;
    let helper = 1;

    for(let i=1; i<=nFloors;i++){
        blankCounter = (nFloors * 2) - helper - 1;
        let middle = blankCounter / 2;

        for(let j=1; j<nFloors*2+1;j++){
            if(blankCounter > middle){
                word += " ";
                blankCounter -= 1;
            }
            if(blankCounter == middle){
                starCounter += 1;
                word += "*";
                if(starCounter == helper){
                    break;
                }
            }
            
        }

        for(let i=1; i<=blankCounter; i++){
            word += " ";
        }

        starCounter = 0;
        array.push(word);
        word = "";
        helper += 2;
    }
    return array;
}

// function towerBuilder(nFloors) {
//     let tower = [];

//     for (let i = 0; i < nFloors; i++) {
//         let spaces = ' '.repeat(nFloors - i - 1);
//         let stars = '*'.repeat(2 * i + 1);
//         tower.push(spaces + stars + spaces);
//     }

//     return tower;
// }


console.log(towerBuilder(3));
