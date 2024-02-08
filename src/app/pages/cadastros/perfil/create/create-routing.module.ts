import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePerfilComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreatePerfilComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePerfilRoutingModule { }