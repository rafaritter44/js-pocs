function findById(id) {
    return new Promise((resolve, reject) => {
        if (id === 1) {
            setTimeout(() => resolve('first value'), 2000);
        } else if (id === 2) {
            setTimeout(() => resolve('second value'), 1000);
        } else {
            reject('not found');
        }
    });
}

findById(1).then(value => value + ' changed').then(console.log);
findById(2).then(value => { throw value; }).catch(console.log);
findById(3).catch(console.log).finally(() => console.log('finished'));