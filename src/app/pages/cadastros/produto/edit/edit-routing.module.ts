import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProdutoComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditProdutoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProdutoRoutingModule { }