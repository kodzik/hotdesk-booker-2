import { Component } from '@angular/core';

@Component({
  selector: 'app-selections',
  styleUrls: ['./selections.component.scss'],
  template: `
    <mat-toolbar style="height: 50px">
      <span>Your selection</span>
    </mat-toolbar>
    <mat-card style="flex-grow: 1">
      <mat-card-content>
        <app-selection-item></app-selection-item>
      </mat-card-content>
    </mat-card>
  `,
})
export class SelectionsComponent {}
