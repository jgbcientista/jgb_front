import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPessoaComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewPessoaComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPessoaRoutingModule { }