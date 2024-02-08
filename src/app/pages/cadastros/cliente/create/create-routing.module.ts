import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClienteComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreateClienteComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateClienteRoutingModule { }