var observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('Completed');
    }
};

Rx.Observable.create(theObserver => {
    theObserver.next('A value');
    setTimeout(() => theObserver.complete(), 2000);
    theObserver.next('Another value');
}).subscribe(observer);