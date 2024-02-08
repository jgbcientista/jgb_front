import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
 
import { utilGeral } from '../../../../utils/utilGeral';
import { FuncaoService } from '../../../../services/funcao.service';
import { Funcao } from '../../../../modelos/funcao.model';
 
 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditFuncaoComponent implements OnInit {
  id!: number;
  funcao!: Funcao;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  messageErro = '';
  messageSucesso = '';
  msgSucesso = false;
  operacao = 'Edição';
  TITULO_PAGINA_VISUALIZACAO = ' Edição dos dados da função';
  
  loaded = false;

  constructor(
    public service: FuncaoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.nova();
    this.id = this.route.snapshot.params['postId'];

    if (this.id) {
      this.loadObjetoById(this.id);
    }
  }

  loadObjetoById(id: number) {
    this.loaded = true;

    this.service.find(id).subscribe((data: Funcao) => {
      this.funcao = data;
      this.loadObjeto(this.funcao);
      this.loaded = false;
    });
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],

    });
  }

  loadObjeto(item: Funcao): void {
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
          alert(response.message)
          this.messageSucesso = response.message;
          this.router.navigateByUrl('list-funcao');
         
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

  mascaraData(data: any) {
    return utilGeral.dataFormata(data);
  }

  limpar() {
    this.nova();
  }
}
