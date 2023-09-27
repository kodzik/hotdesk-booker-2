import { Component } from '@angular/core';

@Component({
  selector: 'app-live-view',
  template: `
    <div class="live-view-container">
      <mat-card class="map">
        <div>MAP</div>
      </mat-card>
      <mat-card class="resource-list">
        <app-resource-list></app-resource-list>
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
        width: 30%;
        margin: 0.5rem;
      }
    `,
  ],
})
export class LiveViewComponent {}
