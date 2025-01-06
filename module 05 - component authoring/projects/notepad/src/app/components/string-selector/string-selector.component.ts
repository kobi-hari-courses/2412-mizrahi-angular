import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  imports: [],
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.scss'
})
export class StringSelectorComponent {
  readonly options = input.required<string[]>();
  readonly selected = model.required<string>();

  /* how we define output

    readonly selectionRequested = output<string>();
  */

  onSelect(value: string){
    /* if it was an event:
      this.selectionRequested.emit(value);
    */
    this.selected.set(value);
  
  }

}
