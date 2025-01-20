import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialAppSlice } from './app.slice';
import { inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { setBusy, setIdle, setResults } from './app.updaters';
import { debounceTime, map, mergeAll, switchAll, switchMap, tap } from 'rxjs';
export const AppStore = signalStore(
    {providedIn: 'root'},
    withState(initialAppSlice), 
    withMethods(store => {
        const dataService = inject(DataService);
        return {
            searchColors: rxMethod<string>(trigger$ => trigger$.pipe(
                tap(() => patchState(store, setBusy())),  
                switchMap(k => dataService.searchColors(k)), 
                tap(res => patchState(store, setResults(res), setIdle())),
            ))

            // searchColors: (keyword: string) => {
            //     patchState(store, setBusy());
            //     const res$ = dataService.searchColors(keyword);
            //     res$.subscribe(colors => {
            //         patchState(store, setIdle(), setResults(colors));
            //     })
            // }    
        }
    })
)