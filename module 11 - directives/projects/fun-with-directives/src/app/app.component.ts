import { Component, input } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { StamComponent } from "./components/stam/stam.component";

@Component({
  selector: 'app-root',
  imports: [HighlightDirective, StamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly bg = input<string>('');
}
