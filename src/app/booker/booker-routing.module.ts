import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveViewComponent } from './containers/live-view/live-view.component';

const routes: Routes = [{ path: '**', component: LiveViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookerRoutingModule {}
