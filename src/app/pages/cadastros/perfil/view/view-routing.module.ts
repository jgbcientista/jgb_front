import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPerfilComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewPerfilComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPerfilRoutingModule { }