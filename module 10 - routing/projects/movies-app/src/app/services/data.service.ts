import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../tokens/base-url.token';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = inject(BASE_URL);
  private http = inject(HttpClient);

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  constructor() { }
}
