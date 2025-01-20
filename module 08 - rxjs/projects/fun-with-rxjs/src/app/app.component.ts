import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, interval, Observable, Observer, of, ReplaySubject, Subject, timer } from 'rxjs';

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

  createCustomObservable(): Observable<number> {
    return new Observable((observer) => {
      observer.next(42);
      setTimeout(() => observer.next(100), 1000);
      setTimeout(() => observer.next(200), 3000);
      setTimeout(() => observer.next(300), 6000);
      setTimeout(() => observer.complete(), 10000);
      setTimeout(() => observer.next(400), 12000);
    });
  }

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 3000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.complete(), 10000);

    return subject;

  }

  createBehaviorCustomSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 3000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.complete(), 10000);

    return subject;

  }

  createReplayCustomSubject(): Observable<number> {
    const subject = new ReplaySubject<number>(2);

    subject.next(42);
    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 3000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.complete(), 10000);

    return subject;

  }

  


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createReplayCustomSubject();

    console.log('Subscribing observer A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscribing observer B');
      observable.subscribe(observerB);
    }, 5000);

    setTimeout(() => {
      console.log('Subscribing observer C');
      observable.subscribe(observerC);
    }, 12000);


  }
}
