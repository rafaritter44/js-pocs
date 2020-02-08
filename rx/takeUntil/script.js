const timer = Rx.Observable.interval(400);
const mouseDown = Rx.Observable.fromEvent(document, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(document, 'mouseup');

mouseDown.switchMap(_event => timer)
        .takeUntil(mouseUp)
        .repeat()
        .subscribe(console.log);