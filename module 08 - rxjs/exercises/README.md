# Exercises for module 08 - RxJS and reactive programming

## Exercise 1: Working with Cold Observables, Subject, and BehaviorSubject

### Objective:
Learn how to create cold observables, subscribe to them using observer objects, and use `Subject` and `BehaviorSubject`.

### Steps:
1. **Creating a Cold Observable**:  
   Create a cold observable that emits values from `1` to `5` with a delay of 1 second between each value, and then **completes**. 
   >Use `new Observable()` for that

2. **Subscribing Using Observer Object**:  
   Create an observer object with `next()`, `error()`, and `complete()` methods.  
   Subscribe to the cold observable using the observer object and log the values as they are emitted.

3. **Using `Subject`**:  
   Create a `Subject`.  
   Emit values to the subject and subscribe to it. Show that subscribers receive the values only after the subscription.

4. **Using `BehaviorSubject`**:  
   Create a `BehaviorSubject` with an initial value of `0`.  
   Emit new values and show that subscribers always receive the current value upon subscription (including the initial value).

---

## Exercise 2: Getting familiar with Operators

### Objective:
Practice using RXJS operators like `map()`, `filter()`, and combining multiple observables.

### Steps:
1. **Creating Multiple Observables**:  
   Create two observables that emit values of numbers. One should emit even numbers and the other odd numbers.

2. **Using `map()` to Transform Values**:  
   Use `map()` to transform the values of each observable into a string that describes whether the number is "Even" or "Odd".

3. **Using `filter()` to Filter Values**:  
   Filter the emitted values to only include numbers greater than `2`.

## Exercise 3: Working with `map`, `take`, and `filter` Operators

### Objective:
Practice using the `map`, `take`, and `filter` operators to manipulate observables.

### Steps:

1. **Creating an Observable of Numbers**:  
   Create an observable that emits the numbers `1` to `10` every second.

2. **Using `map()` to Transform Values**:  
   Use the `map()` operator to square each emitted number.

3. **Using `filter()` to Apply Conditional Logic**:  
   After squaring the numbers, use the `filter()` operator to only allow values greater than 20 to pass through.

4. **Using `take()` to Limit Emissions**:  
   Use the `take()` operator to limit the emission of values to only the first 3 numbers that pass through the `filter()`.

5. **Subscribing and Logging Results**:  
   Subscribe to the observable and log the transformed and filtered values as they are emitted.

