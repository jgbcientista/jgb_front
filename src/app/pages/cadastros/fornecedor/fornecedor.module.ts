import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';[] 
import { NgxPaginationModule } from 'ngx-pagination';
import { ListarFornecedorComponent } from './list/list.component';
import { CreateFornecedorComponent } from './create/create.component';

import { ViewFornecedorRoutingModule } from './view/view-routing.module';
import { ViewFornecedorComponent } from './view/view.component';
import { EditFornecedorComponent } from './edit/edit.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarFornecedorComponent, CreateFornecedorComponent, EditFornecedorComponent,ViewFornecedorComponent
  ],
  declarations: [
    ListarFornecedorComponent, CreateFornecedorComponent, EditFornecedorComponent,ViewFornecedorComponent
  ],
  providers: [
    CreateFornecedorComponent, EditFornecedorComponent, ViewFornecedorRoutingModule, ViewFornecedorRoutingModule
  ],
})
export class FornecedorModule { }