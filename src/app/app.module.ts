import { NgModule } from '@angular/core';
import * as fromApp from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './_shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BookerModule } from './booker/booker.module';
import { NavbarComponent } from './navbar/navbar.component';
import { fakeBackendProvider } from './_test_data/fake-backend.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    MaterialModule,

    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BookerModule,
    SharedModule,
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      trace: true,
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
