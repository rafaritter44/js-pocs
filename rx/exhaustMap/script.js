const clicks = Rx.Observable.fromEvent(document, 'click');
const timer = Rx.Observable.interval(400).take(5);

clicks.exhaustMap(_event => timer).subscribe(console.log);