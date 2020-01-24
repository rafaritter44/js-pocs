Rx.Observable.forkJoin([
    Rx.Observable.ajax.getJSON('https://api.github.com/users/google'),
    Rx.Observable.ajax.getJSON('https://api.github.com/users/microsoft'),
    Rx.Observable.ajax.getJSON('https://api.github.com/users/rafaritter44'),
    // Rx.Observable.ajax.getJSON('https://api.github.com/users/rafaritter45'),
    Rx.Observable.ajax.getJSON('https://api.github.com/users')
]).subscribe({
    next: console.log,
    error: console.log,
    complete: () => console.log('Completed')
});