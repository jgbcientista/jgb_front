import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';[] 
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfilRoutingModule } from './perfil-routing.module';
import { ListarPerfilComponent } from './list/list.component';
import { CreatePerfilComponent } from './create/create.component';

import { ViewPerfilRoutingModule } from './view/view-routing.module';
import { ViewPerfilComponent } from './view/view.component';
import { EditPerfilComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarPerfilComponent, CreatePerfilComponent, EditPerfilComponent,ViewPerfilComponent
  ],
  declarations: [
    ListarPerfilComponent, CreatePerfilComponent, EditPerfilComponent,ViewPerfilComponent
  ],
  providers: [
    CreatePerfilComponent, EditPerfilComponent, ViewPerfilRoutingModule, ViewPerfilRoutingModule
  ],
})
export class PerfilModule { }