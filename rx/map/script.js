var observable = Rx.Observable.interval(400);

observable
    .map(value => value * 2)
    .subscribe({ next: value => console.log(value) });