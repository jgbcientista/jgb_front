import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarServicoComponent } from './list/list.component';
import { EditServicoComponent } from './edit/edit.component';
import { ViewServicoComponent } from './view/view.component';
  
 const routes: Routes = [
  { path: '', component: ListarServicoComponent, children: [
    
    {path: 'create-servico',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreateServicoModule)
    },
    
    { path: '', component: EditServicoComponent, children: [] },
    { path: '', component: ViewServicoComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }