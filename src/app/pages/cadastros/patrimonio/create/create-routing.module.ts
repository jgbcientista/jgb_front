import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePatrimonioComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreatePatrimonioComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePatrimonioRoutingModule { }