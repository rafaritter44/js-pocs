async function f() {
    throw new Error('an error occurred');
}

f().catch(err => console.log(err.message));