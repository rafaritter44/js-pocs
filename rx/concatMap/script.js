const clicks = Rx.Observable.fromEvent(document, 'click');
const timer = Rx.Observable.interval(1000).take(4);

clicks.concatMap(_event => timer).subscribe(console.log);