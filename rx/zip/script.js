const greeting = Rx.Observable.of('Hello');
const greeter = Rx.Observable.of('Ritter');
const age = Rx.Observable.of(23);

Rx.Observable.zip(
        greeting,
        greeter.delay(1000),
        age.delay(2000)
)
.map(([greeting, greeter, age]) => `${greeting} from ${greeter}, ${age} yrs`)
.subscribe(console.log);