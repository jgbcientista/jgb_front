import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
 
import { utilGeral } from '../../../../utils/utilGeral';
import { Patrimonio } from '../../../../modelos/patrimonio.model ';
import { PatrimonioService } from '../../../../services/patrimonio.service ';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditPatrimonioComponent implements OnInit {
  id!: number;
  patrimonio!: Patrimonio;
  form!: FormGroup;
  submitted = false;
  exibirMessgeErro = false;
  messageErro = '';
  messageSucesso = '';
  msgSucesso = false;
  operacao = 'Edição';
  tipoPatrimonios: string[] = [];
  TITULO_PAGINA_VISUALIZACAO = ' Edição dos dados da função';
  
  loaded = false;

  constructor(
    public service: PatrimonioService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.nova();
    this.id = this.route.snapshot.params['postId'];
    this.carregarDados();
    if (this.id) {
      this.loadObjetoById(this.id);
    }
  }

  carregarDados(){
  
    this.loaded = true;
    // obter a lista dos tipos de patrimonios
    this.service.getTipoPatrimonios().subscribe((data: string[]) => {
      this.tipoPatrimonios = data
      this.loaded = false;
    });
  }

  loadObjetoById(id: number) {
    this.loaded = true;

    this.service.find(id).subscribe((data: Patrimonio) => {
      this.patrimonio = data;
      this.loadObjeto(this.patrimonio);
      this.loaded = false;
    });
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      tipoPatrimonio: ['', Validators.required],
      codigo: ['', Validators.required],
      
    });
  }

  loadObjeto(item: Patrimonio): void {
    this.form = this.fb.group({
      id: item.id,
      descricao: item.descricao,
      codigo: item.codigo,
      tipoPatrimonio: item.tipoPatrimonio
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
          this.router.navigateByUrl('list-patrimonio');
         
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
        this.messageErro = 'Por favor, preencha todos os campos. ';
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
