import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';
import { OverviewComponent } from './overview/overview.component';
import { CastComponent } from './cast/cast.component';
import { CrewComponent } from './crew/crew.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
    OneComponent,
    OverviewComponent,
    CastComponent,
    CrewComponent,
    NotFoundComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }
