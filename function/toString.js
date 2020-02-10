function fn() {
    console.log(toString()); // [object Undefined]
}

fn();
console.log(fn.toString()); // function fn() { ... }
console.log(eval('(' + (() => 2 + 2).toString() + ')()')); // 4
