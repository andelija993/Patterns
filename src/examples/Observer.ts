import { Observable } from "rxjs";

const observable = new Observable(function subscribe(subscriber){ 
  subscriber.next('3');
  subscriber.next('4');
  setTimeout(() => {
    subscriber.next('go');
    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("start");
  },
});

export {};
