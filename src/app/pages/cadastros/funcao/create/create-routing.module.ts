import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFuncaoComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreateFuncaoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFuncaoRoutingModule { }