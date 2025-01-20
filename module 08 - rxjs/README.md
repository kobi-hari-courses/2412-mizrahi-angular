## Module 08 - RxJS, 
### Projects:
|     |     |
| --- | --- |
| [fun-with-rxjs](./projects/fun-with-rxjs/) | Introduction to rxjs main classes and concepts |


### Introduction to RxJS
* We understood the meaning of a `Stream`
![](images/00.jpeg)
* We defined what an `Observer<T>` is and understood that it has 3 methods
    * `next(T)`
    * `complete()`
    * `error(err)`
* We understood that `Observable<T>` is an object that allows observers to subscribe
    * `subscribe(Observer<T>)`
![](images/01.jpeg)
* We saw how to define an observer explicitly by supplying the 3 methods and their implementation
* We saw how to create an observable using the `interval` operator
* We saw that 2 observers that subscribe on different times, get different sets of events that are not synchronized
* We understoof the difference between **cold** observables and **hot** observables
* We have seen a few other factory operators:
  * `timer` - creates an observable with time delay. It has two variations
    * `timer(----)`=>  ----0|
    * `timer(----, --)` => ----0--1--2--3--4...
  * `of` - wraps a value or values inside a synchronous observable
    * `of(42)` => (42)|
    * `of(1, 2, 3)` => 123|
  * `from` - serves as a multifunction converter between any wrapper to observable
    * `from([1, 2, 3])` => [1, 2, 3]|
    * `from(Promise ----42|)` => ----42|
* We saw how to create a custom observable using the observable constructor
* We got familiar with the `Subject` object and understood that it is a hot observable
![](./images/02.jpeg)
* We saw that a subject can be used as a proxy to "heat" a cold observable
![](images/03.jpeg)
* We learned about `BehaviorSubject` and understood that it is just a subject that sends the latest event to a new observer on the moment of subscription
![](images/04.jpeg)

#### Introduction to `RxJS` operators
* We talked about the concept of operators in math, strings and arrays
* We understood that RxJS operators create observables. 
* We saw 4 documentation web sites that serve as reference guide for reactive operators
    * [ReactiveX docs](http://reactivex.io/)
    * [RxJS docs](https://rxjs-dev.firebaseapp.com/)
    * [Rx Marbles](https://rxmarbles.com/)
    * [Rx Marble Visualizer](https://rxviz.com/)
* We covered some simple operators
    * [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
    * [from](https://rxjs-dev.firebaseapp.com/api/index/function/from)
    * [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)
    * [take](https://rxjs-dev.firebaseapp.com/api/operators/take)
* We created an example that uses observable to convert color search keyword into a list of matching results (colors)
* We used the `map` operator to convert user input to results

#### Flatteners
* We talked about **Higher Order Observables** - `Observable<Observable<T>>`
* We saw how to create higher order observable using the `map` operator along with a factory method.

```typescript
const order1$ = interval(1000);
const order2$ = order1$.pipe(
    map(i => interval(1000))
);

/*
    order2$ is of type Observable<Observable<number>>
*/
```

* We understood why it's a bad practice to use `subscribe` inside `subscribe`, and therefore why it's important to "Flatten" the observable.
* We saw 4 types of flattening operators:
    - `mergeAll`, and `mergeMap` - Merges all `nexts` from all inner observables
    - `switchAll`, and `switchMap` - Subscribes always to the latest observable
    - `concatAll` and `concatMap` - Subscribes to the observables one after the other sequentially
    - `exhaustAll` and `exhaustMap` - Subscribes to observables until completion only when idle

#### `rxMethod`
- We understood what `rxMethod` is - we understood that it is a method that accepts 3 types of input
    - T
    - Observable<T>
    - Signal<T>
- We understood that it accepts a method as parameter
- We understood that the method accepts an observable and should respond to it using operators
- We saw that we can use `rxMethod` for integration between signal store and reactive services (asyncronous services)
- We saw how to connect `http` with signal store


