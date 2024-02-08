import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClienteComponent } from './list/list.component';
import { EditClienteComponent } from './edit/edit.component';
import { ViewClienteComponent } from './view/view.component';
 
 const routes: Routes = [
  { path: '', component: ListarClienteComponent, children: [
    
    {path: 'create-cliente',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreateClienteModule)
    },
    
    { path: '', component: EditClienteComponent, children: [] },
    { path: '', component: ViewClienteComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }