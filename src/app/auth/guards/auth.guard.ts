import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { selectAuthStatusUser } from '../selectors/auth.selectors';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  return inject(Store)
    .select(selectAuthStatusUser)
    .pipe(
      map((userStatus) =>
        userStatus ? true : router.parseUrl('/account/sign-in')
      )
    );
};
