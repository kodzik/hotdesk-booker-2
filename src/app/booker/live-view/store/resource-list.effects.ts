import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import * as actions from './resource-list.actions';
import { ResourceListService } from '../resource-list.service';

@Injectable()
export class ResourceListEffects {
  resourceQuery = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.queryResources),
      switchMap(() =>
        this.resourceService
          .getResources()
          .stateChanges()
          .pipe(
            mergeMap((actions) => actions),
            map((action) => this.resourceService.setResources(action))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private resourceService: ResourceListService
  ) {}
}
