class Thenable {

    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        setTimeout(() => resolve(this.num * 2), 1000);
    }
    
}

async function f() {
    const result = await new Thenable(2);
    console.log(result);
}

f();