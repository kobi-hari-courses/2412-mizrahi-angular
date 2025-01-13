import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialAppSlice } from './app.slice';
import { computed } from '@angular/core';
import { incrementX, incrementY } from './app.updaters';
export const AppStore = signalStore(
    {providedIn: 'root' },
    withState(initialAppSlice), 
    withComputed(store => ({
        sum: computed(() => store.x() + store.y())
    })), 
    withMethods(store => ({
        incX: () => patchState(store, incrementX()), 
        incY: () => patchState(store, incrementY())
    }))
);
