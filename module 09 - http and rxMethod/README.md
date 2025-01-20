# Module 09 - Http and rxMethod
## Projects
|     |     |
| --- | --- |
| [colors-app](./projects/colors-app/) | Demo of flatterners, http and rxMethod |


## Higher Order Observables
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

## Http
* We saw how to provide Http by using the `provideHttpClient()` function in `app.congig`
* We saw how to inject `HttpClient` to services
* We understood that the http client works with **Cold Observables**
* We saw how to call the `get<T>` function to fetch data from the web
* We saw that using the proper flattening operator, we can also cancel requests that are no longer relevant

### `rxMethod`
- We understood what `rxMethod` is - we understood that it is a method that accepts 3 types of input
    - T
    - Observable<T>
    - Signal<T>
- We understood that it accepts a method as parameter
- We understood that the method accepts an observable and should respond to it using operators
- We saw that we can use `rxMethod` for integration between signal store and reactive services (asyncronous services)
- We saw how to connect `http` with signal store


