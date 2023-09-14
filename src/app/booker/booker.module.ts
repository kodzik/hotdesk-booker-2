import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookerRoutingModule } from './booker-routing.module';
import { LiveViewComponent } from './live-view/live-view.component';
import { ResourceListComponent } from './live-view/resource-list/resource-list.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ResourceComponent } from './live-view/resource/resource.component';

@NgModule({
  declarations: [LiveViewComponent, ResourceListComponent, ResourceComponent],
  imports: [CommonModule, BookerRoutingModule, ScrollPanelModule],
})
export class BookerModule {}
