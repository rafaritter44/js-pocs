var subject = new Rx.Subject();

subject.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completed')
});

subject.subscribe({
    next: value => console.log(value)
});

subject.next('A new data piece');
// subject.error('Error');
subject.complete();