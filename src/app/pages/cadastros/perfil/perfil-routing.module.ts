import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPerfilComponent } from './list/list.component';
import { EditPerfilComponent } from './edit/edit.component';
import { ViewPerfilComponent } from './view/view.component';
 
 const routes: Routes = [
  { path: '', component: ListarPerfilComponent, children: [
    
    {path: 'create-perfil',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreatePerfilModule)
    },
    
    { path: '', component: EditPerfilComponent, children: [] },
    { path: '', component: ViewPerfilComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }