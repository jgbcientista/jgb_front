import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ListarProdutoComponent } from './list/list.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProdutoComponent } from './view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProdutoRoutingModule } from './produto-routing.module';
import { CreateProdutoComponent } from './create/create.component';
import { EditProdutoComponent } from './edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarProdutoComponent, CreateProdutoComponent, EditProdutoComponent
  ],
  declarations: [
    ListarProdutoComponent, ViewProdutoComponent, CreateProdutoComponent, EditProdutoComponent
  ],
  providers: [
    CreateProdutoComponent, EditProdutoComponent
  ],
})
export class ProdutoModule { }