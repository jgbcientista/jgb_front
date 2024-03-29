import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewClienteComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewClienteComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewClienteRoutingModule { }