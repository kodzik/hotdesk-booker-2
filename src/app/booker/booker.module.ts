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

import * as fromResourceList from './reducers';
import { ReservationComponent } from './containers/reservation/reservation.component';
import { LiveViewPageEffects } from './effects/live-view-page.effects';
import { BookerComponent } from './containers/booker/booker.component';

@NgModule({
  declarations: [
    LiveViewComponent,
    ResourceListComponent,
    ReservationComponent,
    BookerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookerRoutingModule,
    StoreModule.forFeature(
      fromResourceList.resourcesFeatureKey,
      fromResourceList.reducers
    ),
    EffectsModule.forFeature([ResourceListEffects, LiveViewPageEffects]),
    SharedModule,
    MaterialModule,
  ],
  providers: [],
})
export class BookerModule {}
