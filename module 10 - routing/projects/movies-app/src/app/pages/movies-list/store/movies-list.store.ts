import { patchState, signalStore, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialMoviesListSlice } from './movies-list.slice';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustAll, map, tap } from 'rxjs';
import { setBusy, setIdle, setMovies } from './movies-list.updaters';
import { inject } from '@angular/core';
import { DataService } from '../../../services/data.service';

export const MoviesListStore = signalStore(
    withState(initialMoviesListSlice), 
    withProps(_ => ({
        _data: inject(DataService)
    })),
    withMethods(store => ({
        reload: rxMethod<void>(trigger$ => trigger$.pipe(
            tap(_ => patchState(store, setBusy())),
            map(_ => store._data.getAllMovies()), 
            exhaustAll(), 
            tap(movies => patchState(store, setIdle(), setMovies(movies)))
        ))
    })), 
    withHooks(store => ({
        onInit: () => store.reload()
    }))
)