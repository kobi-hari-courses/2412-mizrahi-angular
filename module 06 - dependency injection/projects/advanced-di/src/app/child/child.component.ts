import {
  Component,
  DestroyRef,
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
  readonly destroyRef = inject(DestroyRef);

  startInterval() {
    doWithInterval(() => {
      console.log('Bla Bla Bla', this.id());
    }, 3000, this.destroyRef);
  }

  constructor(/* private destroyRef: DestroyRef */) {
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
