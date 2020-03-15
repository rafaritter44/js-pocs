const person = {
    name: 'Ritter',
    age: 23,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// const printName = p => console.log(p.name);
const printName = ({ name }) => console.log(name);
printName(person);

const { name, age } = person;
console.log(name, age);