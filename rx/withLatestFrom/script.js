Rx.Observable.fromEvent(document, 'click')
        .withLatestFrom(Rx.Observable.interval(1000))
        .map(([first, second]) => `MouseEvent: ${first}\nCount: ${second}`)
        .subscribe(console.log);