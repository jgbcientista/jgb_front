import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPatrimonioComponent} from './edit.component';

const routes: Routes = [
  { path: '', component: EditPatrimonioComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPatrimonioRoutingModule { }