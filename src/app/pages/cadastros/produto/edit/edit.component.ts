import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { utilGeral } from '../../../../utils/utilGeral';
import { Produto } from '../../../../modelos/produto.model ';
import { Fornecedor } from '../../../../modelos/fornecedor.model';
import { FornecedorService } from '../../../../services/fornecedor.service';
 
declare const bootstrap: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditProdutoComponent implements OnInit {
  id!: number;
  produto!: Produto;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  messageErro = '';
  messageSucesso = '';
  msgSucesso = false;
  operacao = 'Edição';
  TITULO_PAGINA_VISUALIZACAO = ' Edição dos dados do produto';
  fornecedores: Fornecedor[] = [];
  fornecedoresNaoVinculados: Fornecedor[] = [];
  modal: any;
  paginaAtual = 1;
  idModal: number;
  loaded = false;

  constructor(
    public service: ProdutoService,
    private route: ActivatedRoute,
    public serviceFornecedor: FornecedorService,
    private router: Router,
    private fb: FormBuilder
  ) { this.idModal = 0;}

  ngOnInit(): void {
    this.nova();
    this.id = this.route.snapshot.params['postId'];

    if (this.id) {
      this.loadObjetoById(this.id);
    }
  }

  loadObjetoById(id: number) {
    this.loaded = true;

    this.service.find(id).subscribe((data: Produto) => {
      this.produto = data;
      this.loadObjeto(this.produto);
      this.loaded = false;
    });
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],

    });
  }

  loadObjeto(item: Produto): void {
    this.form = this.fb.group({
      id: item.id,
      descricao: item.descricao
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.loaded = true;
    this.submitted = true;
    this.exibirMessgeErro = false;
    this.msgSucesso = false;
    this.operacao = 'Edição';
   
    if (this.form.invalid) {
      this.exibirMessgeErro = true;
      this.msgSucesso = false;
      this.loaded = false;
      this.messageErro = 'Existe campos sem preenchimento, por favor, preencha.';
      return;
    }

    this.service.update(this.id, this.form.value).subscribe({
      next: (response) => {
        
        if(response.code == 200){
          this.submitted = true;
          this.exibirMessgeErro = false;
          this.msgSucesso = true;
          this.loaded = false;
          this.messageSucesso = response.message;
          this.router.navigateByUrl('list-produto');
         
        } else {
          this.exibirMessgeErro = true;
          this.msgSucesso = false;
          this.messageErro = response.message;
          this.loaded = false
        }

      },
      error: (e) => {
        this.exibirMessgeErro = true;
        this.msgSucesso = false;
        this.messageErro = 'Por favor, preencha todos os filtros ';
        this.loaded = false
      }
    });

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

  deleteVinculoFornecedor(id:number){
    this.loaded = true;
    this.serviceFornecedor.deleteVinculoFornecedor(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.fornecedores = this.fornecedores.filter(item => item.id !== id);
         console.log('Item deletado com sucesso.');
         alert("Item deletado com sucesso.")
         this.loaded = false;
      }
    )
  }

  mascaraData(data: any) {
    return utilGeral.dataFormata(data);
  }

  limpar() {
    this.nova();
  }
}
