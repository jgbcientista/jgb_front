import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPessoaComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditPessoaComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPessoaRoutingModule { }