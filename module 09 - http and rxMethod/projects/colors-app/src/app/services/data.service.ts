import { inject, Injectable } from '@angular/core';
import { Color } from '../models/colors.model';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly http = inject(HttpClient);

  searchColors(keyword: string): Observable<Color[]> {
    console.log('Starting to search for colors with keyword:', keyword);
    const res$ = this.http
      .get<Color[]>(`http://localhost:3000/colors?name_like=${keyword}`).pipe(
        tap(_ => console.log('Fetched colors with keyword:', keyword))
      )
    return res$;

  }

  constructor() { }
}
