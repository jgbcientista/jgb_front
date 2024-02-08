import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { PessoaService } from '../../../../services/pessoa.service';
import { utilGeral } from '../../../../utils/utilGeral';
import { log } from 'node:console';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditPessoaComponent implements OnInit {
  id!: number;
  pessoa!: Pessoa;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  messageErro = '';
  messageSucesso = '';
  msgSucesso = false;
  operacao = 'Edição';
  TITULO_PAGINA_VISUALIZACAO = ' Edição dos dados da pessoa';
  
  pessoaLoaded = false;

  constructor(
    public service: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.nova();
    this.id = this.route.snapshot.params['postId'];

    if (this.id) {
      this.loadPessoaById(this.id);
    }
  }

  loadPessoaById(id: number) {
    this.pessoaLoaded = true;

    this.service.find(id).subscribe((data: Pessoa) => {
      this.pessoa = data;
      this.loadPessoa(this.pessoa);
      this.pessoaLoaded = false;
    });
  }

  nova(): void {
    this.form = this.fb.group({
      tipoPessoa: 'F',
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      ctps: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  loadPessoa(pessoa: Pessoa): void {
    this.form = this.fb.group({
      id: pessoa.id,
      tipoPessoa: pessoa.tipoPessoa,
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      ctps: pessoa.ctps,
      rg: pessoa.rg,
      login: pessoa.login,
      senha: null,
      telefone: pessoa.telefone,
      email: pessoa.email,
      sexo: pessoa.sexo,
      confirmarSenha: null,
      dataNascimento: utilGeral.dataFormata(pessoa.dataNascimento),
      situacao: 'true',
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.pessoaLoaded = true;
    this.submitted = true;
    this.exibirMessgeErro = false;
    this.msgSucesso = false;
    this.operacao = 'Edição';
   
    if (this.form.invalid) {
      this.exibirMessgeErro = true;
      this.msgSucesso = false;
      this.pessoaLoaded = false;
      this.messageErro = 'Existe campos sem preenchimento, por favor, preencha.';
      return;
    }

    if(!this.validarSenhaFormulario()){
      this.exibirMessgeErro = true;
      this.msgSucesso = false;
      this.pessoaLoaded = false;
      this.messageErro = 'As senhas informadas não são iguais.';
      return;
    }

    this.service.update(this.id, this.form.value).subscribe({
      next: (response) => {      
 
          this.submitted = true;
          this.exibirMessgeErro = false;
          this.msgSucesso = true;
          this.pessoaLoaded = false;
          this.messageSucesso = response.message;
          this.router.navigateByUrl('list-pessoa');
 
      },
      error: (e) => {
        this.exibirMessgeErro = true;
        this.msgSucesso = false;
        this.messageErro = e;
        this.pessoaLoaded = false
      }
    });

  }

  validarSenhaFormulario():Boolean {

    if (this.form.value.senha === this.form.value.confirmarSenha) {
        return true;
    } else {
        return false;
    }
  }

  mascaraData(data: any) {
    return utilGeral.dataFormata(data);
  }

  limpar() {
    this.nova();
  }
}
