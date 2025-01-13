import { effect } from '@angular/core';
import {
  getState,
  patchState,
  signalStoreFeature,
  withHooks,
} from '@ngrx/signals';

export function withLocalStorage(key: string) {
  return signalStoreFeature(
    withHooks((store) => ({
      onInit: () => {
        const json = localStorage.getItem(key);
        if (json) {
          const state = JSON.parse(json);
          patchState(store, state);
        }

        effect(() => {
          const state = getState(store);
          const json = JSON.stringify(state);
          localStorage.setItem(key, json);
        });
      },
    }))
  );
}
