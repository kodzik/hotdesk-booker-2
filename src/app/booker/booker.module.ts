import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookerRoutingModule } from './booker-routing.module';
import { LiveViewComponent } from './live-view/live-view.component';
import { ResourceListComponent } from './live-view/resource-list/resource-list.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ResourceComponent } from './live-view/resource/resource.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { resourceListReducer } from './live-view/store/resource-list.reducer';
import { ResourceListEffects } from './live-view/store/resource-list.effects';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [LiveViewComponent, ResourceListComponent, ResourceComponent],
  imports: [
    CommonModule,
    OrderListModule,
    BookerRoutingModule,
    ScrollPanelModule,
    StoreModule.forFeature('resource', resourceListReducer),
    EffectsModule.forFeature([ResourceListEffects]),
  ],
  providers: [],
})
export class BookerModule {}
