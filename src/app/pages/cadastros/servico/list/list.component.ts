import { Component, OnInit } from "@angular/core";
import { FiltroServico } from "../../../../modelos/filtros/filtro.servico.model";
import { Servico } from "../../../../modelos/servico.model";
import { ServicoService } from "../../../../services/servico.service";
import { utilGeral } from "../../../../utils/utilGeral";

 
declare const bootstrap: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

 export class ListarServicoComponent implements OnInit {

  paginaAtual = 1;
  servicos: Servico[] = [];
  possuiRegistros = false;
  idModal: number;
  loaded: boolean;
  modal: any;
  filtro!: FiltroServico;
  
constructor(public service: ServicoService) { 
  this.idModal = 0;
  this.loaded = false;
}  

ngOnInit(): void { 
  this.filtro = new FiltroServico();
  this.findAll();
};

findAll(){
 
  this.loaded = true;
  this.service.getAll().subscribe((data: Servico[]) => {
    this.servicos = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

findFilter(){
  this.loaded = true;
  this.service.findFilter(this.filtro).subscribe((data: Servico[]) => {
    this.servicos = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

  delete(id:number){
    this.loaded = true;
    this.service.delete(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.servicos = this.servicos.filter(item => item.id !== id);
         console.log('Item deletado com sucesso.');
         alert("Item deletado com sucesso.")
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
    this.servicos = [];
    this.possuiRegistros = false;
    this.loaded = false;
    this.filtro = new FiltroServico();
  }

}
 

