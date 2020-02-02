function fn() {
    console.log(toString());
}

fn();
console.log(fn.toString());
console.log(eval('(' + (() => 2 + 2).toString() + ')()'));