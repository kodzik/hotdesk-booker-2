import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookerRoutingModule } from './booker-routing.module';
import { LiveViewComponent } from './containers/live-view/live-view.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { resourceListReducer } from './reducers/resource-list.reducer';
import { ResourceListEffects } from './effects/resource-list.effects';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
  ],
  providers: [],
})
export class BookerModule {}
