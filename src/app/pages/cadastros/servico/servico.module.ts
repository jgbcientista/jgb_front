import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';[] 
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicoRoutingModule } from './servico-routing.module';
import { ListarServicoComponent } from './list/list.component';
import { CreateServicoComponent } from './create/create.component';
import { EditServicoComponent } from './edit/edit.component';
import { ViewServicoRoutingModule } from './view/view-routing.module';
import { ViewServicoComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarServicoComponent, CreateServicoComponent, EditServicoComponent,ViewServicoComponent
  ],
  declarations: [
    ListarServicoComponent, CreateServicoComponent, EditServicoComponent,ViewServicoComponent
  ],
  providers: [
    CreateServicoComponent, EditServicoComponent, ViewServicoRoutingModule, ViewServicoRoutingModule
  ],
})
export class ServicoModule { }