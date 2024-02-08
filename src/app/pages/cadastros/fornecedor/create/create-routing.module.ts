import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFornecedorComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreateFornecedorComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFornecedorRoutingModule { }