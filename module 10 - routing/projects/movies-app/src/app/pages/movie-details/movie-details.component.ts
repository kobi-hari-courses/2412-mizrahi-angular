import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { MovieDetailsStore } from './store/movie-details.store';
import { BusyComponent } from "../../components/busy/busy.component";
import { BASE_URL } from '../../tokens/base-url.token';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, BusyComponent, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  providers: [MovieDetailsStore]

})
export default class MovieDetailsComponent {
  readonly id = input.required<string>();
  readonly idValue = computed(()=> Number(this.id()))
  readonly store = inject(MovieDetailsStore);
  readonly baseUrl = inject(BASE_URL);

  readonly poster = computed(() => `${this.baseUrl}/images/movies/${this.store.movie()?.posterImage}`);
  constructor() {
    this.store.load(this.idValue);

  }


  // readonly route = inject(ActivatedRoute);

  // readonly id = this.route.params.pipe(
  //   map(params => params['id'])
  // );

}
