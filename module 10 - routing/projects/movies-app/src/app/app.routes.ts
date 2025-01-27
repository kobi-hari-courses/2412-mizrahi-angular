import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () =>  import('./pages/home/home.component') },
    { path: 'movies', 
        loadComponent: () => import('./pages/movies-list/movies-list.component'), 
        children: [
            { path: '', pathMatch: 'full' , redirectTo: '1' }, 
            { path: ':id', loadComponent: () => import('./pages/movie-details/movie-details.component')},
        ]
    }, 
    { path: 'actors', loadComponent: () => import('./pages/actors-list/actors-list.component') },
];
