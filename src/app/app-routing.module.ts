import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const AuthModule = () => import('./auth/auth.module').then((x) => x.AuthModule);
const BookerModule = () =>
  import('./booker/booker.module').then((x) => x.BookerModule);

const routes: Routes = [
  { path: '', redirectTo: 'booker', pathMatch: 'full' },
  {
    path: 'booker',
    loadChildren: BookerModule,
  },
  { path: 'account', loadChildren: AuthModule },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
