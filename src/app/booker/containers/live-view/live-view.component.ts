import { Component } from '@angular/core';

@Component({
  selector: 'app-live-view',
  template: `<div class="grid live-view-container">
    <div class="col h-full" id="map">MAP</div>
    <div class="col-5 h-full" id="desk-list">
      <app-resource-list></app-resource-list>
    </div>
  </div> `,
  styles: [
    `
      .live-view-container {
        height: 90vh;
        margin: 0;
      }

      #map {
        background-color: aquamarine;
      }
    `,
  ],
})
export class LiveViewComponent {}
