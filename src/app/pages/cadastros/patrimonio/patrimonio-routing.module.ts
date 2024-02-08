import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPatrimonioComponent } from './list/list.component';
import { EditPatrimonioComponent } from './edit/edit.component';
import { ViewPatrimonioComponent } from './view/view.component';
 
 const routes: Routes = [
  { path: '', component: ListarPatrimonioComponent, children: [
    
    {path: 'create-patrimonio',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreatePatrimonioModule)
    },
    
    { path: '', component: EditPatrimonioComponent, children: [] },
    { path: '', component: ViewPatrimonioComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimonioRoutingModule { }