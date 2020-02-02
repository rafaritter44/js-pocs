const serviceOne = new Promise((resolve, reject) => {
    setTimeout(() => resolve('response from service 1'), 2000);
});

const serviceTwo = new Promise((resolve, reject) => {
    setTimeout(() => resolve('response from service 2'), 1500);
});

const serviceThree = new Promise((resolve, reject) => {
    setTimeout(() => resolve('response from service 3'), 1000);
});

Promise.all([serviceOne, serviceTwo, serviceThree]).then(responses => {
    responses.forEach(console.log);
    return responses.map(response => response + ' changed');
}).then(console.log);

const serviceFour = new Promise((resolve, reject) => reject('error from service 4'));

Promise.all([serviceOne, serviceTwo, serviceThree, serviceFour]).catch(error => {
    console.log(error);
    return 'recovered from error';
}).then(value => {
    console.log(value);
    throw 'new error';
}).catch(console.log).finally(() => console.log('finished'));