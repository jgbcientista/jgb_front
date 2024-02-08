import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarFornecedorComponent } from './list/list.component';
import { EditFornecedorComponent } from './edit/edit.component';
import { ViewFornecedorComponent } from './view/view.component';
 
 const routes: Routes = [
  { path: '', component: ListarFornecedorComponent, children: [
    
    {path: 'create-fornecedor',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreateFornecedorModule)
    },
    
    { path: '', component: EditFornecedorComponent, children: [] },
    { path: '', component: ViewFornecedorComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }