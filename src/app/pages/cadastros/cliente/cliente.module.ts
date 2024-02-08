import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';[] 
import { NgxPaginationModule } from 'ngx-pagination';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ListarClienteComponent } from './list/list.component';
import { CreateClienteComponent } from './create/create.component';

import { ViewClienteRoutingModule } from './view/view-routing.module';
import { ViewClienteComponent } from './view/view.component';
import { EditClienteComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarClienteComponent, CreateClienteComponent, EditClienteComponent,ViewClienteComponent
  ],
  declarations: [
    ListarClienteComponent, CreateClienteComponent, EditClienteComponent,ViewClienteComponent
  ],
  providers: [
    CreateClienteComponent, EditClienteComponent, ViewClienteRoutingModule, ViewClienteRoutingModule
  ],
})
export class ClienteModule { }