import {
  Component,
  DestroyRef,
  effect,
  inject,
  Injector,
  OnDestroy,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { doWithInterval } from '../utils/interval.helper';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent /* implements OnDestroy */ {
  readonly id = signal(Math.ceil(Math.random() * 100000));

  readonly x = signal(0);
  readonly y = signal(0);

  readonly destroyRef = inject(DestroyRef);

  startInterval() {
    doWithInterval(() => {
      console.log('Bla Bla Bla', this.id());
    }, 3000, this.destroyRef);
  }

  incrementX() {
    this.x.update(v => v+ 1);
  }

  incrementY() {
    this.y.update(v => v+ 1);
  }

  incrementBoth() {
    this.x.update(v => v+ 1);
    this.y.update(v => v+ 1);
  }


  constructor(/* private destroyRef: DestroyRef */) {
    const xstr = localStorage.getItem('x');
    const ystr = localStorage.getItem('y');

    this.x.set(xstr ? parseInt(xstr) : 0);
    this.y.set(ystr ? parseInt(ystr) : 0);

    effect(() => {
      console.log('x = ', this.x());
      console.log('y = ', this.y());
      localStorage.setItem('x', this.x().toString());
      localStorage.setItem('y', this.y().toString());
    });

  // const injector = inject(Injector);
    // console.log('Child injector = ', injector);
    // runInInjectionContext(injector, () => {
    // });
  }

  // const destroyRef = inject(DestroyRef);
  // const intervalId = setInterval(() => {
  //   console.log('Bla Bla Bla', this.id())
  // }, 3000);

  // destroyRef.onDestroy(() => {
  //   clearInterval(intervalId);
  //   console.log('ChildComponent destroyed', this.id());
  // });

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  //   console.log('ChildComponent destroyed', this.id());
  // }
}
