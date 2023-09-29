import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ResourceListActions } from '../actions/';
import { ResourceListService } from '../../booker/resource-list.service';

@Injectable()
export class ResourceListEffects {
  resourceQuery = createEffect(() =>
    this.actions$.pipe(
      ofType(ResourceListActions.queryResources),
      switchMap(() => this.resourceService.getResources()),
      map((resources) => {
        return ResourceListActions.addResources({ payload: resources });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private resourceService: ResourceListService
  ) {}
}
