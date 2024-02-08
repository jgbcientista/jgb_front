import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
 
import { utilGeral } from '../../../../utils/utilGeral';
import { ClienteService } from '../../../../services/cliente.service';
import { PessoaService } from '../../../../services/pessoa.service';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { ServicoService } from '../../../../services/servico.service';
import { ServicoContratadoNaoContratadoDTO } from '../../../../modelos/servicocontratadonaocontratado.model';
import { Servico } from '../../../../modelos/servico.model';
import { Produto } from '../../../../modelos/produto.model ';
import { ProdutoService } from '../../../../services/produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditClienteComponent implements OnInit {
  id!: number;
  cliente!: Pessoa;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  msgSucesso = false;
  loaded = false;
  messageErro = '';
  messageSucesso = '';
  messageAviso = '';
  operacao = 'Edição';
  TITULO_PAGINA_VISUALIZACAO = ' Edição contratual do cliente';
  servicosVinculados: Servico[] = [];
  servicosNaoContratados: Servico[] = [];
  produtosVinculados: Produto[] = [];
  produtosNaoVinculados: Produto[] = [];
  possuiServicoProdutoNaoVinculados = false;
 
  constructor(
    public service: ClienteService,
    private route: ActivatedRoute,
    public pessoaService: PessoaService,
    public servicoService: ServicoService,
    public produtoService: ProdutoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.possuiServicoProdutoNaoVinculados = false;
  }

  ngOnInit(): void {
    this.nova();
    this.id = this.route.snapshot.params['postId'];
    this.loadObjetoById(this.id);       
  }

  loadObjetoById(id: number) {
    this.loaded = true;
    this.pessoaService.find(id).subscribe((data: Pessoa)=>{
      this.cliente = data;
      this.loadObjeto();
      this.loadProdutoServico();
      this.loaded = false;
    });
  }

  loadObjeto(): void {
    this.form = this.fb.group({
      nome: this.cliente.nome,
      cpf: this.cliente.cpf,
      servicosSelecionados: null,
      produtosSelecionados: null
    });
  }

  loadProdutoServico(): void {
    this.servicoService.obterServicosVinculadosNaoVinculados(this.id).subscribe((data: ServicoContratadoNaoContratadoDTO)=>{      
        this.servicosVinculados = data.servicosContratados;
        this.servicosNaoContratados = data.servicosNaoContratados;
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
    
    if((this.form.value.produtosSelecionados == null 
      || this.form.value.produtosSelecionados == undefined)
      &&
      (this.form.value.servicosSelecionados == null 
        || this.form.value.servicosSelecionados == undefined) ){
        this.exibirMessgeErro = true;
        this.messageErro = 'Por favor, selecione um produto ou serviço.'
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
          alert('Itens atualizado com sucesso.')
          this.router.navigateByUrl('list-cliente');
         
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

  // deleteremoverAssociacaoProdutoFornecedor(){
  //   this.loaded = true;
  //   this.produtoService.removerAssociacaoProdutoCliente(this.idProduto, this.idFornecedor).subscribe(res => {
  //       // apos a remocao fisica, retira da lista
  //       this.produtosVinculados= this.produtosVinculados.filter(itemFilter => itemFilter.id !== this.idServico);
  //       this.ngOnInit();
  //       this.router.navigateByUrl('/cliente/' +this.id +'/edit');
  //       this.messageErro = '';
  //       this.exibirMessgeErro = false;
  //       this.msgSucesso = true;
  //       this.messageSucesso = 'Produto removido com sucesso.'
  //       this.loaded = false;
  //     }
  //   )
  // }

  removerAssociacaoServico(item: any){
    this.loaded = true;
    this.servicoService.removerAssociacao(item.id, item.idCliente).subscribe(response => {
        // apos a remocao fisica, retira da lista
        this.servicosVinculados = this.servicosVinculados.filter(itemFilter => itemFilter.id !== item.id);
        this.ngOnInit();
        this.router.navigateByUrl('/cliente/' +this.id+'/edit');
        
         this.messageErro = '';
         this.exibirMessgeErro = false;
         this.msgSucesso = true;
         this.messageSucesso = 'Serviço removido com sucesso.'
         this.loaded = false;
      }
    )
  }

  removerAssociacaoProduto(item: any){
    // this.loaded = true;
    // this.produtoService.removerAssociacao(item.id, item.idCliente).subscribe(res => {
    //     // apos a remocao fisica, retira da lista
    //     this.produtosVinculados = this.produtosVinculados.filter(itemFilter => itemFilter.id !== item.id);
    //     this.ngOnInit();
    //     this.router.navigateByUrl('/cliente/' +this.id +'/edit');
    //     this.messageErro = '';
    //     this.exibirMessgeErro = false;
    //     this.msgSucesso = true;
    //     this.messageSucesso = 'Produto removido com sucesso.'
    //     this.loaded = false;
    //   }
    // )
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
