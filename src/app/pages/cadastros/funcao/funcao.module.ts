import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';[] 
import { NgxPaginationModule } from 'ngx-pagination';
import { FuncaoRoutingModule } from './funcao-routing.module';
import { ListarFuncaoComponent } from './list/list.component';
import { CreateFuncaoComponent } from './create/create.component';
import { EditFuncaoComponent } from './edit/edit.component';
import { ViewFuncaoRoutingModule } from './view/view-routing.module';
import { ViewFuncaoComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FuncaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarFuncaoComponent, CreateFuncaoComponent, EditFuncaoComponent,ViewFuncaoComponent
  ],
  declarations: [
    ListarFuncaoComponent, CreateFuncaoComponent, EditFuncaoComponent,ViewFuncaoComponent
  ],
  providers: [
    CreateFuncaoComponent, EditFuncaoComponent, ViewFuncaoRoutingModule, ViewFuncaoRoutingModule
  ],
})
export class FuncaoModule { }