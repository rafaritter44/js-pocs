var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var span = document.querySelector('span');

var obs1 = Rx.Observable.fromEvent(input1, 'input').map(event => event.target.value);
var obs2 = Rx.Observable.fromEvent(input2, 'input').map(event => event.target.value);

obs1.mergeMap(value1 => obs2.map(value2 => value1 + ' ' + value2))
    .subscribe(combinedValue => span.textContent = combinedValue);
