import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveViewComponent } from './containers/live-view/live-view.component';
import { BookerComponent } from './containers/booker/booker.component';
import { ReservationStepperComponent } from './containers/reservation-stepper/reservation-stepper.component';
import { authGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'booker',
    component: BookerComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'live', pathMatch: 'full' },
      { path: 'live', component: LiveViewComponent },
      { path: 'reservation', component: ReservationStepperComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookerRoutingModule {}
