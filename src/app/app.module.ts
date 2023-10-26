import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BookerModule } from './booker/booker.module';
import { fakeBackendProvider } from './_data/fake-backend.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app.component';

import { fromReservation, fromResource } from './booker/reducers/';
import { localStorageSync } from 'ngrx-store-localstorage';

const reducers: ActionReducerMap<any> = {
  reservation: fromReservation.reservationReducers,
  resources: fromResource.resourceReducers,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      { reservation: ['reservationForm', 'reservations'] },
      { resources: ['resources'] },
      { auth: ['status'] },
    ],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    BookerModule,
    MaterialModule,

    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
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
