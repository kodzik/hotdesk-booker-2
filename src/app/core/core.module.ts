import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './containers/app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class CoreModule {}
