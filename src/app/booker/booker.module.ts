import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BookerRoutingModule } from './booker-routing.module';
import { LiveViewComponent } from './containers/live-view/live-view.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ResourceListEffects } from './effects/resource-list.effects';
import { MaterialModule } from '../material';
import { SharedModule } from '../_shared/shared/shared.module';
import { CommonModule } from '@angular/common';

import { fromResource, fromReservation } from './reducers';

import { ReservationComponent } from './containers/reservation/reservation.component';
import { LiveViewPageEffects } from './effects/live-view-page.effects';
import { BookerComponent } from './containers/booker/booker.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SelectionsComponent } from './components/selections/selections.component';
import { SelectionItemComponent } from './components/selection-item/selection-item.component';
import { ReservationStepperComponent } from './containers/reservation-stepper/reservation-stepper.component';
import { MapComponent } from './components/map/map.component';
import { ReservationFormDirective } from './directives/reservation-form.directive';
import { FormGroupDirective } from '@angular/forms';
import { ReservationEffects } from './effects/reservation.effects';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LiveViewComponent,
    ResourceListComponent,
    ReservationComponent,
    BookerComponent,
    DatePickerComponent,
    SelectionsComponent,
    SelectionItemComponent,
    ReservationStepperComponent,
    MapComponent,
    ReservationFormDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookerRoutingModule,
    StoreModule.forFeature(
      fromResource.resourcesFeatureKey,
      fromResource.resourceReducers
    ),
    StoreModule.forFeature(
      fromReservation.reservationFeatureKey,
      fromReservation.reservationReducers
    ),
    EffectsModule.forFeature([
      ResourceListEffects,
      LiveViewPageEffects,
      ReservationEffects,
    ]),
    SharedModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [FormGroupDirective],
})
export class BookerModule {}
