async function findById(id) {
    const promise = new Promise((resolve, reject) => {
        if (!!id) {
            setTimeout(() => resolve(`value ${id}`), 1000);
        } else {
            reject('not found');
        }
    });
    try {
        const result = await promise;
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

findById(1);
findById(null);