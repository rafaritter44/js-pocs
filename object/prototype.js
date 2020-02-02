/*
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
*/

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("John", "Doe");

Person.prototype.nationality = "English";
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

const person2 = new Person("Mary", "Doe");

console.log(person1.nationality);
console.log(person1.fullName());
console.log(person2.nationality);
console.log(person2.fullName());


// Prototype Inheritance

console.log({}.valueOf()); // {}
console.log(new Object().valueOf()); // {}
console.log(person1.valueOf()); // Person { firstName: 'John', lastName: 'Doe' }
console.log(person2.valueOf()); // Person { firstName: 'Mary', lastName: 'Doe' }
console.log(Person.valueOf()); // [Function: Person]
console.log((123).valueOf()); // 123
console.log(new Number(123).valueOf()); // 123
console.log("abc".valueOf()); // abc
console.log(new String("abc").valueOf()); // abc
console.log([].valueOf()); // []
console.log(Date.valueOf()); // [Function: Date]
console.log(new Date().valueOf()); // 1580667856873

Object.prototype.valueOf = () => 'changed';

console.log({}.valueOf()); // changed
console.log(new Object().valueOf()); // changed
console.log(person1.valueOf()); // changed
console.log(person2.valueOf()); // changed
console.log(Person.valueOf()); // changed
console.log((123).valueOf()); // 123
console.log(new Number(123).valueOf()); // 123
console.log("abc".valueOf()); // abc
console.log(new String("abc").valueOf()); // abc
console.log([].valueOf()); // changed
console.log(Date.valueOf()); // changed
console.log(new Date().valueOf()); // 1580667856874

Number.prototype.valueOf = () => 'changed';
String.prototype.valueOf = () => 'changed';
Date.prototype.valueOf = () => 'changed';

console.log({}.valueOf()); // changed
console.log(new Object().valueOf()); // changed
console.log(person1.valueOf()); // changed
console.log(person2.valueOf()); // changed
console.log(Person.valueOf()); // changed
console.log((123).valueOf()); // changed
console.log(new Number(123).valueOf()); // changed
console.log("abc".valueOf()); // changed
console.log(new String("abc").valueOf()); // changed
console.log([].valueOf()); // changed
console.log(Date.valueOf()); // changed
console.log(new Date().valueOf()); // changed