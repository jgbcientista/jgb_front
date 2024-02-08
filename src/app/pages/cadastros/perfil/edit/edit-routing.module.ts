import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPerfilComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditPerfilComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPefilRoutingModule { }