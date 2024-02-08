import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateServicoComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreateServicoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateServicoRoutingModule { }