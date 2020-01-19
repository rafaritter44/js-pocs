var button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
    .map(event => event.clientX)
    .throttleTime(1000)
    .subscribe(value => console.log(value));