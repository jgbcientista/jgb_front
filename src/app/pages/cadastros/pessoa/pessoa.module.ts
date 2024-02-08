import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ListarPessoaComponent } from './list/list.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPessoaComponent } from './view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { CreatePessoaComponent } from './create/create.component';
import { EditPessoaComponent } from './edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarPessoaComponent, CreatePessoaComponent, EditPessoaComponent
  ],
  declarations: [
    ListarPessoaComponent, ViewPessoaComponent, CreatePessoaComponent, EditPessoaComponent
  ],
  providers: [
    CreatePessoaComponent, EditPessoaComponent
  ],
})
export class PessoaModule { }