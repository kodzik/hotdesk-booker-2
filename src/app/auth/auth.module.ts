import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';

import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../auth/effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './reducers/';
import { MaterialModule } from '../material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, LayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature(AuthEffects),
  ],
  providers: [],
})
export class AuthModule {}
