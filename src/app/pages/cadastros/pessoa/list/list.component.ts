import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../../../../services/pessoa.service';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { utilGeral } from '../../../../utils/utilGeral';
import { FiltroPessoa } from '../../../../modelos/filtros/filtro.pessoa.model';

declare const bootstrap: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

 export class ListarPessoaComponent implements OnInit {

  paginaAtual = 1;
  pessoas: Pessoa[] = [];
  possuiRegistros = false;
  idPessoaModal: number;
  pessoaLoaded: boolean;
  modalPessoa: any;
  filtroPessoa!: FiltroPessoa;
  mensagemErro = '';
  msgErro = false;
  
constructor(public service: PessoaService) { 
  this.idPessoaModal = 0;
  this.pessoaLoaded = false;
}  

ngOnInit(): void { 
  this.filtroPessoa = new FiltroPessoa();
  this.findFilter();
};

findAll(){
 
  this.pessoaLoaded = true;
  this.service.getAll().subscribe((data: Pessoa[]) => {
    this.pessoas = data
    this.possuiRegistros = true;
    this.pessoaLoaded = false;
  });
}

findFilter(){
  this.pessoaLoaded = true;
  this.filtroPessoa.tipo = 'P'
 
  this.service.findFilter(this.filtroPessoa).subscribe({
    next: (res) => {
    this.pessoas = res
    this.possuiRegistros = true;
    this.pessoaLoaded = false;
    this.msgErro = false;
    },
    error: (e) => {
      this.possuiRegistros = false;
      this.pessoaLoaded = false;
      this.msgErro = true;
      this.mensagemErro = e;
    },
  });
}

  delete(id:number){
    this.pessoaLoaded = true;
    this.service.delete(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.pessoas = this.pessoas.filter(item => item.id !== id);
         console.log('Item deletado com sucesso.');
         alert("Item deletado com sucesso.")
         this.pessoaLoaded = false;
      }
    )
  }

  abrirModal(item: any) {
    this.idPessoaModal = item.id;
    this.pessoaLoaded = true;
    
    if (this.modalPessoa === undefined) {
      this.modalPessoa = new bootstrap.Modal(document.getElementById('modalExclusao'), {
        keyboard: true
      })
      const selectPessoa = document.getElementById('modalExclusao')
      selectPessoa?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modalPessoa?.show();
  }

  onCloseModal() {
    this.idPessoaModal = 0;
    this.pessoaLoaded = false;
 
  }

  mascaraCpfCNPJ(cpf:any){
  return utilGeral.mascaraCpfCNPJ(cpf);
  }

  limpar(){
    this.pessoas = [];
    this.possuiRegistros = false;
    this.pessoaLoaded = false;
    this.filtroPessoa = new FiltroPessoa();
    this.msgErro = false;
    this.mensagemErro = '';
  }

}
 

