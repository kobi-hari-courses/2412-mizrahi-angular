# Module 4 - Introduction Signals

## Projects:
|     |     |
| --- | --- |
| [Fun with Signals](./projects/fun-with-signals/) | Change Detection and Signals |
| [Notepad](./projects/notepad/) | Adapting the notepad app to signals |

### Change Detection in Angular
* We talked about the **Magic** behind angulars change detection
* We talked about threads, tasks, and how zone.js works
* We understood that the automatic change detection is wasteful and not performant and especially - why
* We saw how to disable automatic change detection using the decorator property: `changeDetection` and the ChangeDetectionStrategy enumeration
* We saw how to use signals so that we do not rely on change detection at all

### Introduction to signals
* We saw how to use the `signal(value)` function to create a signal wrapper around a value
* We saw how to use the `signal.set` and `signal.update` methods to modify the value.
    - `.set` - to set a new value
    - `.update` - to set a value that the depends on the old value
* We saw how to derive computed values using `signal.computed`

