import { Component, inject } from '@angular/core';
import { AppStore } from './store/app.store';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(AppStore);
}
