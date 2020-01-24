var observable = Rx.Observable.of(1, 2, 3, 4, 5);

observable
    .reduce((total, currentValue) => total + currentValue, 0)
    .subscribe(total => console.log(total));