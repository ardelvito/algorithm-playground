// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// 6 kyu
// Who likes it?

function likes(names) {
  // TODO
    var word = ''
    if(names.length == 0){
        word += 'no one likes this';
    }
    else{
        if(names.length == 1){
            word += `${names[0]} like this`;
        }
        else if(names.length == 2){
            word += `${names[0]} and ${names[1]} like this`;
        }
        else if(names.length == 3){
            word += `${names[0]}, ${names[1]} and ${names[2]} like this`;
        }
        else{
            var remaining = names.length - 2;
            word += `${names[0]}, ${names[1]} and ${remaining} others like this`;

        }
    }
    return word;

}

// function likes(names) {
//   switch(names.length){
//     case 0:
//       return "no one likes this";
//     case 1:
//       return names[0] + " likes this";
//     case 2:
//       return names[0] + " and " + names[1] + " like this";
//     case 3:
//       return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//     default: 
//       return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
//   }
// }

console.log(likes(['jone']));
console.log(likes(['jone', 'adams']));
console.log(likes(["Alex", "Jacob", "Mark", "Max", 'Andreans']));
