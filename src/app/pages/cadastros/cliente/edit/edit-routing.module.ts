import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClienteComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditClienteComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPefilRoutingModule { }