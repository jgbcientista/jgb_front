import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFornecedorComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewFornecedorComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFornecedorRoutingModule { }