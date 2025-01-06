import { Component, signal } from '@angular/core';
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss',
  providers: []
})
export class CalcComponent {
  readonly result = signal(0);

  constructor(protected service: AdditionService){}

  go(val1: number, val2: number) {
    this.result.set(this.service.add(val1, val2));

  }
}
