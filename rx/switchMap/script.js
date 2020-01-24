var button = document.querySelector('button');

var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(400);

obs1.switchMap(_event => obs2)
    .subscribe(value => console.log(value));