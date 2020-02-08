const firstTimer = Rx.Observable.timer(0, 2000);
const secondTimer = Rx.Observable.timer(1000, 2000);

Rx.Observable.combineLatest(firstTimer, secondTimer)
        .map(([first, second]) => `1st count: ${first}\n2nd count: ${second}`)
        .subscribe(console.log);