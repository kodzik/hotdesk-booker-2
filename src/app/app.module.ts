import { NgModule } from '@angular/core';
import * as fromApp from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './_shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BookerModule } from './booker/booker.module';
import { fakeBackendProvider } from './_test_data/fake-backend.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app.component';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    BookerModule,
    SharedModule,
    MaterialModule,

    AppRoutingModule,
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
