import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarFuncaoComponent } from './list/list.component';
import { EditFuncaoComponent } from './edit/edit.component';
import { ViewFuncaoComponent } from './view/view.component';
 
 const routes: Routes = [
  { path: '', component: ListarFuncaoComponent, children: [
    
    {path: 'create-funcao',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreateFuncaoModule)
    },
    
    { path: '', component: EditFuncaoComponent, children: [] },
    { path: '', component: ViewFuncaoComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncaoRoutingModule { }