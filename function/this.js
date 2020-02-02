function fn() {
    console.log(this);
}

fn(); // Node.js: Object [global] { ... } / Chrome: Window { ... }
console.log(this); // Node.js: {} / Chrome: Window { ... }
(() => console.log(this))(); // Node.js: {} / Chrome: Window { ... }
(function() { console.log(this); })(); // Node.js: Object [global] { ... } / Chrome: Window { ... }
new (function() { console.log(this); })(); // Node.js: {} / Chrome: {}