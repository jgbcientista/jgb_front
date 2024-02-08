import { Component, OnInit } from "@angular/core";
import { utilGeral } from "../../../../utils/utilGeral";
import { Fornecedor } from "../../../../modelos/fornecedor.model";
import { FiltroFornecedor } from "../../../../modelos/filtros/filtro.fornecedor.model";
import { PessoaService } from "../../../../services/pessoa.service";
import { FiltroPessoa } from "../../../../modelos/filtros/filtro.pessoa.model";
import { FornecedorService } from "../../../../services/fornecedor.service";

 
declare const bootstrap: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

 export class ListarFornecedorComponent implements OnInit {

  paginaAtual = 1;
  fornecedors: Fornecedor[] = [];
  possuiRegistros = false;
  idModal: number;
  loaded: boolean;
  modal: any;
  filtro!: FiltroPessoa;
  
constructor(
  public service: FornecedorService, 
  public pessoaService: PessoaService) { 
  this.idModal = 0;
  this.loaded = false;
}  

ngOnInit(): void { 
  this.filtro = new FiltroFornecedor();
  this.findAll();
};

findAll(){
 
  this.loaded = true;
  this.pessoaService.findAllFornecedor().subscribe((data: Fornecedor[]) => {
    this.fornecedors = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

findFilter(){
  this.loaded = true;
  this.filtro.tipo = 'F';
  this.pessoaService.findFilter(this.filtro).subscribe((data: Fornecedor[]) => {
    this.fornecedors = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

  delete(id:number){
    this.loaded = true;
    this.service.delete(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.fornecedors = this.fornecedors.filter(item => item.id !== id);
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
    this.fornecedors = [];
    this.possuiRegistros = false;
    this.loaded = false;
    this.filtro = new FiltroFornecedor();
  }

}
 

