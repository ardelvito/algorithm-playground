// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
// 6 kyu
// Meeting

function meeting(s) {
    // your code
    var guest = s.toUpperCase().split(';');

    var mappingGuest = guest.map(element => element.split(":"));

    mappingGuest.sort((a,b) => {
        const lastNameA = a[1]; // Extract last name from array
        const lastNameB = b[1]; // Extract last name from array
        return lastNameA.localeCompare(lastNameB) || a[0].localeCompare(b[0]); // If last names are the same, compare first names
    })

    var eachSplitName = '';
    var eachInvitation = '';
    
    for (let i = 0; i < mappingGuest.length; i++) {
        eachInvitation += '('
        for (let index = 1; index >= 0; index--) {
            eachSplitName = mappingGuest[i][index];
            eachInvitation += eachSplitName;
            if(index == 1){
                eachInvitation += ', '
            }
            
        }
        eachInvitation += ')'
    }
    return eachInvitation;
}

// function meeting(s) {
//     const guests = s.toUpperCase().split(';');

//     const formattedGuests = guests.map(guest => {
//         const [firstName, lastName] = guest.split(':');
//         return { firstName, lastName };
//     });

//     formattedGuests.sort((a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName));

//     const sortedInvitations = formattedGuests.map(guest => `(${guest.lastName}, ${guest.firstName})`);

//     return sortedInvitations.join('');
// }


// function meeting(s) {
//   let string = s.toUpperCase().split(';')
//                 .map(x => x.split(':').reverse().join(', '))
//                 .sort()
//                 .join(')(')
//   return '(' + string + ')'
// }
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));