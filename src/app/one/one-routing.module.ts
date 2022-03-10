import { DefaultComponent } from './default/default.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrewComponent } from './crew/crew.component';
import { CastComponent } from './cast/cast.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
  {
    path: 'default',
    component: DefaultComponent,
  },
  {
    path: ':id',
    component: OneComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'cast', component: CastComponent },
      { path: 'crew', component: CrewComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'default',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
