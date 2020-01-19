var button = document.querySelector('button');
// button.addEventListener('click', event => console.log(event));

var subscription = Rx.Observable.create(observer => {
	button.onclick = event => observer.next(event);
}).subscribe(value => console.log(value));

setTimeout(() => subscription.unsubscribe(), 5000);