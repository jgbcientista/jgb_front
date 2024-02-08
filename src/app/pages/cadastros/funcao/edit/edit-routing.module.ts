import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFuncaoComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditFuncaoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFuncaoRoutingModule { }