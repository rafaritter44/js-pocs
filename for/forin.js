const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

for (const property in person) {
    if (person.hasOwnProperty(property)) {
        const value = person[property];
        console.log(property + ': ' + (typeof value === 'function' ? value.call(person) : value));
        // console.log(property + ': ' + (typeof value === 'function' ? person[property]() : value));
    }
}