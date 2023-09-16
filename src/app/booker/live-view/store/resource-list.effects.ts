import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Resource } from 'src/app/_models/resource';
import * as actions from './resource-list.actions';

@Injectable()
export class ResourceListEffects {
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.queryResources),
      switchMap((action) => {
        console.log(action);
        return this.afs
          .collection<Resource>(
            'location/H786qVsMedStm2TIAmky/rooms/CnAdCOxVovPqW52nJieN/desks'
          )
          .stateChanges();
      }),
      mergeMap((actions) => actions),
      map((action) => {
        console.log(action);

        return {
          type: `[Resource List] ${action.type}`,
          payload: {
            ...action.payload.doc.data(),
            id: action.payload.doc.id,
          },
        };
      })
    )
  );

  constructor(private actions$: Actions, private afs: AngularFirestore) {}
}
