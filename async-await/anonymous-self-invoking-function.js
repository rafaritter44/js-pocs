(async () => {
    const result = await new Promise((resolve, reject) => setTimeout(() => resolve('done'), 1000));
    console.log(result);
})();