import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewServicoComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewServicoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewServicoRoutingModule { }