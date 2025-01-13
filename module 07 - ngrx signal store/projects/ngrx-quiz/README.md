# Try it yourself - Adding Computed signals
In this exercise we will repeat what I did in the **Colors Quiz** project, and add computed signals.
We will also add a few more computed signals

Please repeat the following steps: 

## Repeat the steps:
1. Add a `withComputed` feature.
    - receive the store as parameter 
    - create constants for each computed signal you create
    - finally return an object with key-value pairs of the computed signals
2. Create computed signals for
    - `currentQuestionIndex`
    - `isDone`
    - `currentQuestion`
3. In the `question presenter` component
    - Inject the store
    - The `question` property should point to the correct signal in the store 

## Extra challange
4. Now let's add a few more computed signals
    - in `progress.component.ts` change it so that the `value` and `max` signals are **required inputs** (instead of writeable signals)
    - Add `questionsCount` computed signal to the store
    - In `app.component.html` add the `<app-progress/>` element and feed the required inputs using signals from the store


