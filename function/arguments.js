function fn() {
    console.log(arguments);
    console.log(arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log(arguments[arguments.length]);
}

fn();
fn(null);
fn(null, null, null);