import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProdutoComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreateProdutoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProdutoRoutingModule { }