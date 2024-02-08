import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProdutoComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewProdutoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProdutoRoutingModule { }