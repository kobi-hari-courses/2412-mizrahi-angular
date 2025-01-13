import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStore } from './store/app.store';
import { patchState } from '@ngrx/signals';
import { incrementX, incrementY } from './store/app.updaters';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  providers: []
})
export class AppComponent {
  readonly store = inject(AppStore);
}
