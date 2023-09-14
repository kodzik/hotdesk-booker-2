import { Component } from '@angular/core';
import {
  Firestore,
  GeoPoint,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Desk {
  available: boolean;
  name: string;
  reserved: boolean;
  bounds?: GeoPoint;
}

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  desks$: Observable<any>;

  constructor(private firestore: Firestore) {
    const userProfileCollection = collection(
      this.firestore,
      '/location/H786qVsMedStm2TIAmky/rooms/CnAdCOxVovPqW52nJieN/desks'
    );
    this.desks$ = collectionData(userProfileCollection) as Observable<Desk[]>;
  }
}
