import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ClienteService } from '../../../../services/cliente.service';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { Cliente } from '../../../../modelos/cliente.model';
import { Servico } from '../../../../modelos/servico.model';
import { ServicoService } from '../../../../services/servico.service';
import { ProdutoService } from '../../../../services/produto.service';
import { Produto } from '../../../../modelos/produto.model ';
import { PessoaService } from '../../../../services/pessoa.service';

     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateClienteComponent implements OnInit {
    
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
    public service: ClienteService,
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

    this.servicePessoa.buscarRegistroByCpf(cpf).subscribe({
      next: (res) => {
        this.pessoa = res
        this.possuiRegistro = true;
        this.loaded = false;
        this.msgErro = false;
        this.exibirDadosPessoa = true;
      },
      error: (e) => {
        this.loaded = false;
        this.possuiRegistro = false;
        this.exibirDadosPessoa = false;
        this.msgErro = true;
        this.mensagemErro = e;
      },
    });
  }
  
  onSubmit(): void {

   this.service.create(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.msgErro = false;
        this.msgSucesso = true;
        this.router.navigateByUrl('list-cliente');
      },
      error: (e) => {
        this.loaded = false;
        this.possuiRegistro = false;
        this.exibirDadosPessoa = false;
        this.msgErro = true;
        this.mensagemErro = e;
      },
    });
  }

  limpar(){
    this.nova();
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      servicosSelecionados: 0,
      produtosSelecionados: 0
    });
  }

}