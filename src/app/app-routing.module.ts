import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasystemComponent } from './datasystem/datasystem.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{path:'datasystem',component:DatasystemComponent},
{path:'details',component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent=[DatasystemComponent]
