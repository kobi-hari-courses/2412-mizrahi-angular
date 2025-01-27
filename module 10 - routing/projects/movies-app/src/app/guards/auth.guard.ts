import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  const targetUrl = state.url;

  if (auth.value()) {
    return true;
  } else {
    const auth$ = toObservable(auth.value);

    auth$.pipe(
      filter(v => v === true), 
      take(1)
    ).subscribe(_ => {
      router.navigateByUrl(targetUrl);
    })

    return router.createUrlTree(['/account'])
  }
};
