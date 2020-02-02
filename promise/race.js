const serviceOne = new Promise((resolve, reject) => {
    setTimeout(() => reject('error from service 1'), 2000);
});

const serviceTwo = new Promise((resolve, reject) => {
    setTimeout(() => reject('error from service 2'), 1500);
});

const serviceThree = new Promise((resolve, reject) => {
    setTimeout(() => resolve('response from service 3'), 1000);
});

Promise.race([serviceOne, serviceTwo, serviceThree])
        .then(response => response + ' changed')
        .then(console.log);

const serviceFour = new Promise((resolve, reject) => reject('error from service 4'));

Promise.race([serviceOne, serviceTwo, serviceThree, serviceFour]).catch(console.log);