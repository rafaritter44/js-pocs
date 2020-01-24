Rx.Observable.fromEvent(document, 'click')
    .do(value => console.log(value))
    .map(event => event.clientX)
    .do(value => console.log(value))
    .subscribe();