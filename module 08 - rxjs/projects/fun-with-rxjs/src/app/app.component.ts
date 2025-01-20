import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Observable, Observer, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  createObserver(id: string): Observer<number> {
    return {
      next: (v) => console.log(`Observer ${id} got a next value: ${v}`),
      complete: () => console.log(`Observer ${id} got a complete notification`),
      error: (err) => console.error(`Observer ${id} got an error: ${err}`),
    }
  }

  createInterval(): Observable<number> {
    return interval(1000);
  }

  createOf(): Observable<number> {
    return of(42, 100, 200);
  }

  createTimer(): Observable<number> {
    return timer(2000);
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createTimer();

    console.log('Subscribing observer A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscribing observer B');
      observable.subscribe(observerB);
    }, 5000);


  }
}
