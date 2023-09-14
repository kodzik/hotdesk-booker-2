import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AuthModule = () => import('./auth/auth.module').then((x) => x.AuthModule);
const BookerModule = () =>
  import('./booker/booker.module').then((x) => x.BookerModule);

const routes: Routes = [
  { path: 'account', loadChildren: AuthModule },
  { path: 'booker', loadChildren: BookerModule },
  { path: '**', redirectTo: 'account' }, //, pathMatch: 'full'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
