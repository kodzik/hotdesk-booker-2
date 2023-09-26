import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../_shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from '../auth/effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './reducers/';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, LayoutComponent],
  imports: [
    AuthRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    SharedModule,
    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature(AuthEffects),
  ],
  providers: [],
})
export class AuthModule {}
