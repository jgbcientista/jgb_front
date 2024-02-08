import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
 
import { utilGeral } from '../../../../utils/utilGeral';
import { Perfil } from '../../../../modelos/perfil.model';
import { PerfilService } from '../../../../services/perfil.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditPerfilComponent implements OnInit {
  id!: number;
  perfil!: Perfil;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  messageErro = '';
  messageSucesso = '';
  msgSucesso = false;
  operacao = 'Edição';
  TITULO_PAGINA_VISUALIZACAO = ' Edição dos dados do perfil';
  
  loaded = false;

  constructor(
    public service: PerfilService,
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

    this.service.find(id).subscribe((data: Perfil) => {
      this.perfil = data;
      this.loadObjeto(this.perfil);
      this.loaded = false;
    });
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      nome: ['', Validators.required],

    });
  }

  loadObjeto(item: Perfil): void {
    this.form = this.fb.group({
      id: item.id,
      descricao: item.descricao,
      nome: item.nome
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
          this.router.navigateByUrl('list-perfil');
         
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
