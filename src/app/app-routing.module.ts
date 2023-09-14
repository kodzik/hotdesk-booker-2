import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AuthModule = () => import('./auth/auth.module').then((x) => x.AuthModule);

const routes: Routes = [
  { path: 'account', loadChildren: AuthModule },
  { path: '**', redirectTo: 'account' }, //, pathMatch: 'full'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
