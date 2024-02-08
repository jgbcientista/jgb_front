import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditServicoComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditServicoComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditServicoRoutingModule { }