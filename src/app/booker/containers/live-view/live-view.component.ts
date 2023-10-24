import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReservationFormActions } from '../../actions';

@Component({
  selector: 'app-live-view',
  template: `
    <div class="live-view-container">
      <mat-card class="map">
        <div>MAP</div>
      </mat-card>
      <mat-card class="resource-list">
        <app-resource-list></app-resource-list>
        <button
          id="reserveResourceBtn"
          mat-raised-button
          color="primary"
          (click)="reserveResource()"
        >
          Go to booking
        </button>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .live-view-container {
        display: flex;
        height: 90vh;
        margin: 0;
      }

      .map {
        width: 70%;
        margin: 0.5rem;
      }

      .resource-list {
        display: flex;
        justify-content: space-between;
        width: 30%;
        margin: 0.5rem;
      }
    `,
  ],
})
export class LiveViewComponent {
  constructor(private store: Store) {}

  reserveResource() {
    this.store.dispatch(ReservationFormActions.reservationNew());
  }
}
