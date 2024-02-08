import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProdutoComponent } from './list/list.component';
import { EditProdutoComponent } from './edit/edit.component';
import { ViewProdutoComponent } from './view/view.component';
  
 const routes: Routes = [
  { path: '', component: ListarProdutoComponent, children: [
    
    {path: 'create-produto',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreateProdutoModule)
    },
    
    { path: '', component: EditProdutoComponent, children: [] },
    { path: '', component: ViewProdutoComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }