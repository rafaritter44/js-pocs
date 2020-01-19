var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
    .map(event => event.target.value)
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe(value => console.log(value));