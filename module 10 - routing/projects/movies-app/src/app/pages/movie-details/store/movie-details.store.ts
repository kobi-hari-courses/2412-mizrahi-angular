import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";
import { initialMovieDetailsSlice } from "./movie-details.slice";
import { inject } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { map, switchAll, tap } from "rxjs";
import { setBusy, setIdle, setMovie } from "./movie-detaills.updaters";

export const MovieDetailsStore = signalStore(
    withState(initialMovieDetailsSlice), 
    withProps(_ => ({
        _data: inject(DataService)
    })), 
        withMethods(store => ({
            load: rxMethod<number>(trigger$ => trigger$.pipe(
                tap(_ => patchState(store, setBusy())),
                map(id => store._data.getMovie(id)), 
                switchAll(), 
                tap(movie => patchState(store, setIdle(), setMovie(movie)))
            ))
        })), 
    
)