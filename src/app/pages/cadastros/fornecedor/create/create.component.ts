import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { Fornecedor } from '../../../../modelos/fornecedor.model';
import { Servico } from '../../../../modelos/servico.model';
import { ServicoService } from '../../../../services/servico.service';
import { ProdutoService } from '../../../../services/produto.service';
import { Produto } from '../../../../modelos/produto.model ';
import { PessoaService } from '../../../../services/pessoa.service';
import { FornecedorService } from '../../../../services/fornecedor.service';

     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateFornecedorComponent implements OnInit {
    
  form!: FormGroup;
  submitted = false;
  loaded = false;
  exibirDadosPessoa = false;
  msgErro = false;
  mensagemErro = '';
  msgSucesso = false;
  pessoa = new Pessoa;
  possuiRegistro = false;
  operacao = "Cadastro";
  cpf = '';
  TITULO_PAGINA_CREATE = 'Ficha de Cadastro';

  servicos: Servico[] = [];
  produtos: Produto[] = [];
  

  constructor(
    public service: FornecedorService,
    public serviceServico: ServicoService,
    public serviceProduto: ProdutoService,
    public servicePessoa: PessoaService,
    private fb: FormBuilder,
    private router: Router
  ) { }
    
  
  ngOnInit(): void {
    this.nova();

    this.findPServicos();
    this.findProdutos();

  }

  get f(){
    return this.form.controls;
  }

  findPServicos(){
    this.loaded = true;
    this.serviceServico.getAll().subscribe((data: Servico[]) => {
      this.servicos = data
      this.loaded = false;
    });
  }

  findProdutos(){
    this.loaded = true;
    this.serviceProduto.getAll().subscribe((data: Produto[]) => {
      this.produtos = data
      this.loaded = false;
    });
  }


  // buscarRegistroByCpf() {
  //   let cpf = this.form.value.cpf;
  //   this.servicePessoa.buscarRegistroByCpf(cpf).subscribe(
  //     el => {
  //       alert(1)
  //     },
  //     err => {
  //       alert(err);
  //     },
  //     () => alert("Processing Complete.")
  //   );
  // }
 

  buscarRegistroByCpf(){
    this.loaded = true;
    let cpf = this.form.value.cpf;

    if(!cpf){
      this.msgErro = true;
      this.loaded = false;
      this.exibirDadosPessoa = false;
      this.mensagemErro = 'Informe o campo CPF';
      return;
    }
 
    this.servicePessoa.buscarRegistroByCpf(cpf).subscribe((res: any) => {  
  
        this.pessoa = res
        this.possuiRegistro = true;
        this.loaded = false;
        this.msgErro = false;
        this.exibirDadosPessoa = true;
    
    },
    err => {
      this.loaded = false;
      this.possuiRegistro = false;
      this.exibirDadosPessoa = false;
      this.msgErro = true;
      this.mensagemErro = err;
    },
    () => console.log("Processo realizado.")
 
    )    
  }
  
  onSubmit(): void {

    if(!this.form.value.servicosSelecionados && !this.form.value.produtosSelecionados){
      this.mensagemErro = 'Selecione um produto ou serviço para este fornecedor.';
      this.msgErro = true;
      this.msgSucesso = false;
      this.submitted = false;
      return;
    }
    this.submitted = true;
    this.loaded = true;
    this.service.create(this.form.value).subscribe({
      next: (res) => {
          this.msgErro = false;
          this.msgSucesso = true;
          this.loaded = false;
          this.router.navigateByUrl('list-fornecedor');
      },
      error: (e) => {
        this.msgErro = true;
        this.msgSucesso = false;
        this.loaded = false; 
        this.mensagemErro = e;
      },
    });
  }

  limpar(){
    this.nova();
  }

  nova(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      servicosSelecionados: [],
      produtosSelecionados: []
    });
  }

}