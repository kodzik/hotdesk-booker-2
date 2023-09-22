import { Component } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

export interface UserProfile {
  name: string;
}

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.scss'],
})
export class FirebaseTestComponent {
  users$: Observable<any>;

  constructor() {
    // private firestore: Firestore
    // const userProfileCollection = collection(this.firestore, 'users');
    // this.users$ = collectionData(userProfileCollection) as Observable<
    //   UserProfile[]
    // >;
    // this.users$ = this.getTestData();
  }
}
