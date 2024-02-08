import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';[] 
import { NgxPaginationModule } from 'ngx-pagination';
import { PatrimonioRoutingModule } from './patrimonio-routing.module';
import { ListarPatrimonioComponent } from './list/list.component';
import { CreatePatrimonioComponent } from './create/create.component';
import { EditPatrimonioComponent } from './edit/edit.component';
import { ViewPatrimonioRoutingModule } from './view/view-routing.module';
import { ViewPatrimonioComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    PatrimonioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListarPatrimonioComponent, CreatePatrimonioComponent, EditPatrimonioComponent,ViewPatrimonioComponent
  ],
  declarations: [
    ListarPatrimonioComponent, CreatePatrimonioComponent, EditPatrimonioComponent,ViewPatrimonioComponent
  ],
  providers: [
    CreatePatrimonioComponent, EditPatrimonioComponent, ViewPatrimonioRoutingModule, ViewPatrimonioRoutingModule
  ],
})
export class PatrimonioModule { }