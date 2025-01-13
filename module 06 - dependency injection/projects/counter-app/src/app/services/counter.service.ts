import { computed, Injectable, signal } from '@angular/core';
import { single } from 'rxjs';

export type XOrY = 'x' | 'y';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  #x = signal(0);
  #y = signal(0);

  sum = computed(() => this.#x() + this.#y());
  x = this.#x.asReadonly();
  y = this.#y.asReadonly();

  incremement(who: XOrY) {
    if (who === 'x') {
      this.#x.update((v) => v + 1);
    } else {
      this.#y.update((v) => v + 1);
    }
  }

  decrement(who: XOrY) {
    if (who === 'x') {
      this.#x.update((v) => v - 1);
    } else {
      this.#y.update((v) => v - 1);
    }
  }

  constructor() {}
}
