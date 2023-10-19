import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <span>
        <img id="logo" src="assets/logo.svg" alt="My Happy SVG" />
      </span>
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
