import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of } from 'rxjs';
import { ResourceListActions, ResourceListApiActions } from '../actions';
import { ResourceListService } from '../services/resource-list.service';

@Injectable()
export class ResourceListEffects {
  resourceQuery = createEffect(() =>
    this.actions$.pipe(
      ofType(ResourceListActions.queryResources),
      switchMap(() =>
        this.resourceService.getResources().pipe(
          map((resources) =>
            ResourceListApiActions.fetchSuccess({ payload: resources })
          ),
          catchError((errorMsg) =>
            of(ResourceListApiActions.fetchFailure({ errorMsg }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private resourceService: ResourceListService
  ) {}
}
