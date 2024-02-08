import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from './edit/edit.component';
import { ViewPostComponent } from './view/view.component';
import { IndexComponent } from './list/index.component';
  
 const routes: Routes = [
  { path: '', component: IndexComponent, children: [
    
    {path: 'create-post',
      loadChildren: () => import(`./create/create.module`)
        .then(mod => mod.CreatePostModule)
    },
    
    { path: '', component: EditPostComponent, children: [] },
    { path: '', component: ViewPostComponent, children: [] }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }