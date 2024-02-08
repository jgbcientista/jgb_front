import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditServicoRoutingModule } from './edit-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditServicoRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EditServicoModule { }
