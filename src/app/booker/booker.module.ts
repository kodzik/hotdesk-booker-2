import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookerRoutingModule } from './booker-routing.module';
import { LiveViewComponent } from './live-view/live-view.component';
import { ResourceListComponent } from './live-view/resource-list/resource-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { resourceListReducer } from './live-view/store/resource-list.reducer';
import { ResourceListEffects } from './live-view/store/resource-list.effects';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [LiveViewComponent, ResourceListComponent],
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    CalendarModule,
    FormsModule,
    CommonModule,
    BookerRoutingModule,
    StoreModule.forFeature('resource', resourceListReducer),
    EffectsModule.forFeature([ResourceListEffects]),
    SharedModule,
  ],
  providers: [],
})
export class BookerModule {}
