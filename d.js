function meeting(s) {
    const guests = s.toUpperCase().split(';');

    const formattedGuests = guests.map(guest => {
        const [firstName, lastName] = guest.split(':');
        return { firstName, lastName };
    });

    formattedGuests.sort((a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName));

    const sortedInvitations = formattedGuests.map(guest => `(${guest.lastName}, ${guest.firstName})`);

    return sortedInvitations.join('');
}

const result = meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill");
console.log(result);
