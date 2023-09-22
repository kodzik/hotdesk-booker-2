import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/compat/firestore';
import { Action } from '@ngrx/store';
import { Observable, switchMap, mergeMap, map } from 'rxjs';
import { Resource } from 'src/app/_models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceListService {
  resources$: Observable<Resource[]>;

  constructor(private afs: AngularFirestore) {}

  getResources() {
    return this.afs.collection<Resource[]>(
      'location/H786qVsMedStm2TIAmky/rooms/CnAdCOxVovPqW52nJieN/desks'
    );
  }

  setResources(action: any) {
    return {
      type: `[Resource List] ${action.type}`,
      payload: {
        ...action.payload.doc.data(),
        id: action.payload.doc.id,
      },
    };
  }
}
