import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFornecedorComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditFornecedorComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPefilRoutingModule { }