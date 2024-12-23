import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly value = signal(42);
  readonly doubleValue = computed(() => this.value() * 2);

  readonly colors = signal(['red', 'green', 'blue']);

  addColor() {
    this.colors.update(val => [...val, 'yellow']);
  }

  getNumber() {
    console.log('getNumber called');
    return 100;
  }

  doNothing() {}

  constructor() {
    setInterval(() => {
      this.value.update(s => s + 1);
      console.log('value changed', this.value());
    }, 3000);
  }
}
