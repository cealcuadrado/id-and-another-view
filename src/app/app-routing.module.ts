import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'foo', loadChildren: () => import('./foo/foo.module').then(m => m.FooModule) },
  { path: 'one', loadChildren: () => import('./one/one.module').then(m => m.OneModule) },
  { path: 'two', loadChildren: () => import('./two/two.module').then(m => m.TwoModule) },
  { path: '', redirectTo: '/foo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
