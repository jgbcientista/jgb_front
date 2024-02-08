import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';


@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    UsuarioComponent
  ],
  declarations: [
    UsuarioComponent
  ],
  providers: [
  ],
})
export class UsuarioModule { }