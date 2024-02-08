import { Component, OnInit } from "@angular/core";
import { utilGeral } from "../../../../utils/utilGeral";
import { Cliente } from "../../../../modelos/cliente.model";
import { FiltroCliente } from "../../../../modelos/filtros/filtro.cliente.model";
import { ClienteService } from "../../../../services/cliente.service";
import { PessoaService } from "../../../../services/pessoa.service";
import { FiltroPessoa } from "../../../../modelos/filtros/filtro.pessoa.model";

 
declare const bootstrap: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

 export class ListarClienteComponent implements OnInit {

  paginaAtual = 1;
  clientes: Cliente[] = [];
  possuiRegistros = false;
  idModal: number;
  loaded: boolean;
  modal: any;
  filtro!: FiltroPessoa;
  
constructor(
  public service: ClienteService, 
  public pessoaService: PessoaService) { 
  this.idModal = 0;
  this.loaded = false;
}  

ngOnInit(): void { 
  this.filtro = new FiltroCliente();
  this.findAll();
};

findAll(){
 
  this.loaded = true;
  this.pessoaService.findAllCliente().subscribe((data: Cliente[]) => {
    this.clientes = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

findFilter(){
  this.loaded = true;
  this.filtro.tipo = 'C';
  this.pessoaService.findFilter(this.filtro).subscribe((data: Cliente[]) => {
    this.clientes = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

  delete(id:number){
    this.loaded = true;
    this.service.delete(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.clientes = this.clientes.filter(item => item.id !== id);
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
    this.clientes = [];
    this.possuiRegistros = false;
    this.loaded = false;
    this.filtro = new FiltroCliente();
  }

}
 

