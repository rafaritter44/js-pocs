let person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2));

person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
console.log(person.fullName.apply(person2, ["Oslo", "Norway"]));

console.log(Math.max(1,2,3));
console.log(Math.max.apply(null, [1,2,3]));