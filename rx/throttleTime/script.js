var button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
    .map(event => event.clientX)
    .throttleTime(1000)
    .subscribe(value => console.log(value));

var observable = Rx.Observable.interval(1000);
var observer = value => console.log(value);

observable
    .map(value => 'Number: ' + value)
    .throttleTime(1900)
    .subscribe(observer);