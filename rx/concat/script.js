const timer = Rx.Observable.interval(1000).take(4);
const sequence = Rx.Observable.range(10, 4);

Rx.Observable.concat(timer, sequence).subscribe(console.log);
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 10 ... 13