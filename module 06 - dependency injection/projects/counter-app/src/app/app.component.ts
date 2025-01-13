import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPresenterComponent } from "./counter-presenter/counter-presenter.component";
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  imports: [CounterPresenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly counterService = inject(CounterService);
  
}
