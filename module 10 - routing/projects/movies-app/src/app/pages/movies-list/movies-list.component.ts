import { Component, inject } from '@angular/core';
import { MoviesListStore } from './store/movies-list.store';
import { BusyComponent } from '../../components/busy/busy.component';

@Component({
  selector: 'app-movies-list',
  imports: [BusyComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss', 
  providers: [MoviesListStore]
})
export default class MoviesListComponent {
  readonly store = inject(MoviesListStore);

}
