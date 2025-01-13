# Module 06 - Introduction to Dependency Injection
## Projects:
|     |     |
| --- | --- |
| [DI](./projects//fun-with-di/) | Dependency Injection in Angular 14+ |
| [Advanced Di]()


### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of the `config`, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
* We saw examples of 2 additional providers: 
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services

### Advanced DI
* The `Injector` is an object that we can inject on our own and use it programatically.
    * We inject it by using the `Injector` token
    * We can use it to get instances of objects per token.
* There are other types of "requests" or "token".
    * We can create a new constant of type  `InjectionToken` to serve as alternative token.
    * We can use the `useValue` and `useFactory` providers to set the value of the token
    * We consume the token using the `@Inject` decorator
  
### The `DestroyRef` object
* We saw that we now no longer need the `OnDestroy` lifecycle hook, and instead can use the `DestroyRef`
* We saw how to use it to register cleanup logic
* We saw that every injector has this feature, so it is not neccessarily a component feature

### The `inject` function
* Starting with angular 14, we can inject using the `inject` function instead of using constructor parameters
* We saw that we can only use it during "injection context" which means that it can only be called when we are inside a constructor or initializer.
* We saw that we can "trigger" an artifical injection context by storing the `Injector` and then calling the `runInInjectionContext` function
* We saw that util functions can use this approach to implement their own cleanup logic using the `DestroyRef`

