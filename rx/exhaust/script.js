const clicks = Rx.Observable.fromEvent(document, 'click');
const higherOrder = clicks.map(_event => Rx.Observable.interval(400).take(5));

higherOrder.exhaust().subscribe(console.log);