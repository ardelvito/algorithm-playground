function towerBuilder(nFloors) {
//   // build here
//     let array = [];
//     let word = "";
//     let blankCounter = 0;
//     let starCounter = 0;
//     let helper = 1;

//     for(let i=1; i<=nFloors;i++){
//         blankCounter = (nFloors * 2) - helper - 1;
//         let middle = blankCounter / 2;

//         for(let j=1; j<nFloors*2+1;j++){
//             // if(j == 1){
//             //     word += '';
//             // }
//             // // else if(blankCounter > 2){
//             // // }
//             if(blankCounter > middle){
//                 word += " ";
//                 blankCounter -= 1;
//             }
//             if(blankCounter == middle){
//                 starCounter += 1;
//                 word += "*";
//                 if(starCounter == helper){
//                     break;
//                 }
//                 // break;
//             }
            
//         }

//         for(let i=1; i<=blankCounter; i++){
//             word += " ";
//         }

//         // word += '';
//         starCounter = 0;
//         array.push(word);
//         word = "";
//         helper += 2;
//     }
//     return array;
// }