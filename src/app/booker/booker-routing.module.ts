import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveViewComponent } from './containers/live-view/live-view.component';
import { BookerComponent } from './containers/booker/booker.component';
import { ReservationStepperComponent } from './containers/reservation-stepper/reservation-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: BookerComponent,
    children: [
      { path: 'live-view', component: LiveViewComponent },
      { path: 'reservation', component: ReservationStepperComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookerRoutingModule {}
