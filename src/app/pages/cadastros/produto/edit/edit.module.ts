import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProdutoRoutingModule } from './edit-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditProdutoRoutingModule,    
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EditProdutoModule { }
