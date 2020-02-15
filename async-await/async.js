async function f() {
    return 'Hello, async!';
}

async function g() {
    return Promise.resolve('Hello, async!');
}

f().then(console.log); // Hello, async!
g().then(console.log); // Hello, async!