import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPatrimonioComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewPatrimonioComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPatrimonioRoutingModule { }