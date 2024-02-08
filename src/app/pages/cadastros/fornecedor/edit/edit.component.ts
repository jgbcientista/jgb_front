import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
 
import { utilGeral } from '../../../../utils/utilGeral';
import { PessoaService } from '../../../../services/pessoa.service';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { ServicoService } from '../../../../services/servico.service';
import { ServicoContratadoNaoContratadoDTO } from '../../../../modelos/servicocontratadonaocontratado.model';
import { Servico } from '../../../../modelos/servico.model';
import { Produto } from '../../../../modelos/produto.model ';
import { ProdutoService } from '../../../../services/produto.service';
import { FornecedorService } from '../../../../services/fornecedor.service';

declare const bootstrap: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditFornecedorComponent implements OnInit {

  fornecedor!: Pessoa;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  msgSucesso = false;
  loaded = false;
  messageErro = '';
  messageSucesso = '';
  messageAviso = '';
  operacao = 'Edição';
  TITULO_PAGINA_VISUALIZACAO = ' Edição contratual do fornecedor';
  servicosVinculados: Servico[] = [];
  servicosNaoVinculados: Servico[] = [];
  produtosVinculados: Produto[] = [];
  produtosNaoVinculados: Produto[] = [];
  possuiServicoProdutoNaoCadastrados = false;
  paginaAtual = 1;
  idServico: number;
  idProduto: number;
  idPessoa: number;
  modal: any;
  itensServicosAdd = [0];
  
   constructor(
    public service: FornecedorService,
    private route: ActivatedRoute,
    public pessoaService: PessoaService,
    public servicoService: ServicoService,
    public produtoService: ProdutoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.possuiServicoProdutoNaoCadastrados = false;
    this.idServico = 0;
    this.idPessoa = 0;
    this.idProduto = 0;
  }

  ngOnInit(): void {
    this.nova();
    this.idPessoa = this.route.snapshot.params['postId'];
    this.loadObjetoById(this.idPessoa);       
  }

  loadObjetoById(id: number) {
    this.loaded = true;
    this.pessoaService.find(id).subscribe((data: Pessoa)=>{
      this.fornecedor = data;
      this.loadObjeto();
      this.loadProdutoServico();
      this.loaded = false;
    });
  }

  loadObjeto(): void {
    this.form = this.fb.group({
      nome: this.fornecedor.nome,
      cpf: this.fornecedor.cpf,
      servicosSelecionados: null,
      produtosSelecionados: null
    });
  }

  loadProdutoServico(): void {
    this.servicoService.obterServicosVinculadosNaoVinculados(this.idPessoa).subscribe((data: ServicoContratadoNaoContratadoDTO)=>{      
        this.servicosVinculados = data.servicosContratados;
        this.servicosNaoVinculados = data.servicosNaoContratados;
        this.produtosVinculados = data.produtosContratados;
        this.produtosNaoVinculados = data.produtosNaoContratados;
      });
  }

  nova(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      servicosSelecionados: null,
      produtosSelecionados: null

    });
  }
  
  addItem(id: any){
    let element  =  document.getElementById("itemCheck") as HTMLInputElement;     
    if(element.checked){
      this.itensServicosAdd.push(id);
    } else {
      this.itensServicosAdd = this.itensServicosAdd.filter((item) => item !== id);    
    }
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
    
    // if((this.form.value.produtosSelecionados == null 
    //   || this.form.value.produtosSelecionados == undefined)
    //   &&
    //   (this.itensServicosAdd == null 
    //     ||this.itensServicosAdd == undefined) ){
    //     this.exibirMessgeErro = true;
    //     this.messageErro = 'Por favor, selecione um produto ou serviço.'
    //     return;
    //   }
    // this.form.value.servicosSelecionados  = this.itensServicosAdd;

    if((this.form.value.produtosSelecionados == null 
      || this.form.value.produtosSelecionados == undefined)
      &&
      (this.form.value.servicosSelecionados == null 
        ||this.form.value.servicosSelecionados == undefined) ){
        this.exibirMessgeErro = true;
        this.messageErro = 'Por favor, selecione um produto ou serviço.'
        return;
      }
    this.service.update(this.idPessoa, this.form.value).subscribe({
      next: (response) => {

        if(response.code == 200){
          this.submitted = true;
          this.exibirMessgeErro = false;
          this.msgSucesso = true;
          this.loaded = false;
          this.messageSucesso = response.message;
          this.router.navigateByUrl('list-fornecedor');
         
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
        this.messageErro = 'Ocorreu um erro ao processar ';
        this.loaded = false
      }
    });
  }

 
  delete(){ 
      if(this.idProduto != null && this.idProduto != 0 && this.idProduto != undefined){
        //alert('produto')
        this.removerAssociacaoProduto();
    } else if(this.idServico != null && this.idServico != 0 && this.idServico != undefined){
        //alert('Serviço')
        this.removerAssociacaoServico();
    }
 
  }

  removerAssociacaoServico(){

    this.loaded = true;
    this.servicoService.removerAssociacaoServicoFornecedor(this.idServico, this.idPessoa).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.produtosVinculados= this.produtosVinculados.filter(itemFilter => itemFilter.id !== this.idServico);
        this.ngOnInit();
        this.router.navigateByUrl('/fornecedor/' +this.idPessoa +'/edit');
        this.messageErro = '';
        this.exibirMessgeErro = false;
        this.msgSucesso = true;
        this.messageSucesso = 'Serviço removido com sucesso.'
        this.loaded = false;
      }
    )
  }

 
  removerAssociacaoProduto(){

    this.loaded = true;
    this.produtoService.removerAssociacaoProdutoFornecedor(this.idProduto, this.idPessoa).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.produtosVinculados= this.produtosVinculados.filter(itemFilter => itemFilter.id !== this.idServico);
        this.ngOnInit();
        this.router.navigateByUrl('/fornecedor/' +this.idPessoa +'/edit');
        this.messageErro = '';
        this.exibirMessgeErro = false;
        this.msgSucesso = true;
        this.messageSucesso = 'Produto removido com sucesso.'
        this.loaded = false;
      }
    )
  }

  abrirModal(item: any, tipo: string) {

    if(tipo == 'P'){
      this.idProduto = item.id;
    } else  if(tipo == 'S'){
      this.idServico = item.id;
    }  
    
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
    this.idServico = 0;
    this.idPessoa = 0;
    this.loaded = false; 
  }

  mascaraData(data: any) {
    return utilGeral.dataFormata(data);
  }

  limpar() {
    this.nova();
  }

  get f() {
    return this.form.controls;
  }

}
