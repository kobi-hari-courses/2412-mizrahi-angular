import { DestroyRef, inject } from "@angular/core";

export function doWithInterval(callback: () => void, delay: number, destroyRef: DestroyRef = inject(DestroyRef)) {
    const intervalId = setInterval(callback, delay);
    destroyRef.onDestroy(() => {
        clearInterval(intervalId);
    });
}
