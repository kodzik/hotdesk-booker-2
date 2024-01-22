import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<div class="account-container">
    <div class="account-subcontainer">
      <router-outlet></router-outlet>
    </div>
  </div> `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
