import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPessoaComponent } from './list/list.component';
import { EditPessoaComponent } from './edit/edit.component';
import { ViewPessoaComponent } from './view/view.component';
  
 const routes: Routes = [
  { path: '', component: ListarPessoaComponent, children: [
    
    {path: 'create-pessoa',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreatePessoaModule)
    },
    
    { path: '', component: EditPessoaComponent, children: [] },
    { path: '', component: ViewPessoaComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }