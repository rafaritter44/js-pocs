var observable = Rx.Observable.interval(200);

observable
    .filter(value => value % 2 == 0)
    .subscribe({ next: value => console.log(value) });