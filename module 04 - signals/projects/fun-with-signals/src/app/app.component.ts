import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  readonly shouldMultiply = signal(true);
  private myNumber = signal(42);
  readonly nonWriteable = this.myNumber.asReadonly();
  readonly doubleNumber = computed(() => this.shouldMultiply() 
    ? this.myNumber() * 2 
    : this.myNumber());

  readonly numbers = signal([1, 2, 3, 4, 5]);
  readonly person = signal({ name: 'John', age: 42 });


  constructor() {
    setTimeout(() => {
      this.myNumber.update(v => v + 1);
      console.log('Changing myNumber to', this.myNumber());
    }, 5000);

    setTimeout(() => {
      this.numbers.update(v => [...v, 6]);
      console.log('The numbers in the array are', this.numbers());
    }, 5000);

    setTimeout(() => {
      this.person.update(p => ({...p, age: p.age + 1}));
      console.log('The person is now', this.person());
    }, 8000);
  }
}
