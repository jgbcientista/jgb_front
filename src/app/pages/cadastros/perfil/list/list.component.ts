import { Component, OnInit } from "@angular/core";
import { utilGeral } from "../../../../utils/utilGeral";
import { Perfil } from "../../../../modelos/perfil.model";
import { FiltroPerfil } from "../../../../modelos/filtros/filtro.perfil.model";
import { PerfilService } from "../../../../services/perfil.service";

 
declare const bootstrap: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

 export class ListarPerfilComponent implements OnInit {

  paginaAtual = 1;
  perfis: Perfil[] = [];
  possuiRegistros = false;
  idModal: number;
  loaded: boolean;
  modal: any;
  filtro!: FiltroPerfil;
  
constructor(public service: PerfilService) { 
  this.idModal = 0;
  this.loaded = false;
}  

ngOnInit(): void { 
  this.filtro = new FiltroPerfil();
  this.findAll();
};

findAll(){
 
  this.loaded = true;
  this.service.getAll().subscribe((data: Perfil[]) => {
    this.perfis = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

findFilter(){
  this.loaded = true;
  this.service.findFilter(this.filtro).subscribe((data: Perfil[]) => {
    this.perfis = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

  delete(id:number){
    this.loaded = true;
    this.service.delete(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.perfis = this.perfis.filter(item => item.id !== id);
         console.log('Item deletado com sucesso.');
         this.loaded = false;
      }
    )
  }

  abrirModal(item: any) {
    this.idModal = item.id;
    this.loaded = true;
    
    if (this.modal === undefined) {
      this.modal = new bootstrap.Modal(document.getElementById('modalExclusao'), {
        keyboard: true
      })
      const select = document.getElementById('modalExclusao')
      select?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modal?.show();
  }

  onCloseModal() {
    this.idModal = 0;
    this.loaded = false;
 
  }

  mascaraCpfCNPJ(cpf:any){
  return utilGeral.mascaraCpfCNPJ(cpf);
  }

  limpar(){
    this.perfis = [];
    this.possuiRegistros = false;
    this.loaded = false;
    this.filtro = new FiltroPerfil();
  }

}
 

