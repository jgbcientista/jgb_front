import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewFuncaoComponent } from './view.component';

const routes: Routes = [
  { path: '', component: ViewFuncaoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFuncaoRoutingModule { }