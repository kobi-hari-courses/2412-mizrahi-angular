import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable({ providedIn: 'root' })
export class AdditionService {
  readonly id = Math.ceil(Math.random() * 1000000);

  constructor(private history: HistoryService) {
    console.log('AdditionService created with id: ' + this.id);
  }

  add(val1: number, val2: number): number {
    this.history.audit(`add, ${val1}, ${val2}`);
    return val1 + val2;
  }
}
