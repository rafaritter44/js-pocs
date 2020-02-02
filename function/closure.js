const counterFactory = (() => {
    let count = 1;
    return () => count++;
});

const counter1 = counterFactory();
const counter2 = counterFactory();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());

const counter = (() => {
    let count = 1;
    return () => count++;
})();

console.log(counter());
console.log(counter());
console.log(counter());