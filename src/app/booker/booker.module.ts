import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookerRoutingModule } from './booker-routing.module';
import { LiveViewComponent } from './live-view/live-view.component';


@NgModule({
  declarations: [
    LiveViewComponent
  ],
  imports: [
    CommonModule,
    BookerRoutingModule
  ]
})
export class BookerModule { }
