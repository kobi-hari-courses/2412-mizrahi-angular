# Exercises for module 10 - Routing

## Exercise 1: Angular Basic Routing Exercise: Book List

## Objective:
In this exercise, you will practice setting up Angular routing by creating an application that displays information about four books. Each book will have its own route, and the data will be displayed in separate components. You'll also implement lazy loading using `loadComponent` and create a navigation bar to navigate between the books.

## Steps:

### 1. Set up your Angular Project:
- Create a new Angular project (if you haven't already).
- Generate four components for each book:
  - `book1`
  - `book2`
  - `book3`
  - `book4`

### 2. Create Routes for Each Book:
- In your `app-routing.module.ts`, set up routes for each book component:
```typescript
  const routes: Routes = [
    { path: 'book1', component: Book1Component },
    { path: 'book2', component: Book2Component },
    { path: 'book3', component: Book3Component },
    { path: 'book4', component: Book4Component },
    { path: '', redirectTo: '/book1', pathMatch: 'full' }  // Default route
  ];
```

### 3. Create a service
- The service should implement a method that receives an index of book and returns the `Book` object

```typescript
interface Book {
    readonly title: string;
    readonly author: string;
    readonly description: string;
}
```
* The method should be as following
```
getBook(index: number): Book
```

>NOTE: For now, make the method synchronous, and of course return some fake data.


### 4. Connect the components to the service
Each component should inject the service and load the data from it

### 5. Navigation bar 
* Create a nav bar
* Use `routerLink` to hook elements to the proper path
* Use `routerLinkActive` and some CSS to style the selected element

### 6. Lazy loading
* In the router file, replace `component:` with `loadComponent:` to enable lazy loading
* Make sure the add `default` to each component class declaration: 
```typescript
export **default** class MyComponent
```

