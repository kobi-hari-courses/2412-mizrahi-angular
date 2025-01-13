import { Component, computed, inject, input } from '@angular/core';
import { CounterService, XOrY } from '../services/counter.service';

@Component({
  selector: 'app-counter-presenter',
  imports: [],
  templateUrl: './counter-presenter.component.html',
  styleUrl: './counter-presenter.component.scss'
})
export class CounterPresenterComponent {
  readonly who = input.required<XOrY>();
  readonly counterService = inject(CounterService);

  readonly value = computed(() => this.who() === 'x' 
    ? this.counterService.x() 
    : this.counterService.y());

  inc() {
    this.counterService.incremement(this.who());
  }

  dec() {
    this.counterService.decrement(this.who());
  }
}
