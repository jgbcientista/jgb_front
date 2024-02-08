import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { PessoaService } from '../../../../services/pessoa.service';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreatePessoaComponent implements OnInit {
    
  form!: FormGroup;
  submitted = false;
  msgErro = false;
  msgSucesso = false;
  operacao = "Cadastro";
  TITULO_PAGINA_CREATE = 'Ficha de Cadastro';
 
  constructor(
    public service: PessoaService,
    private fb: FormBuilder,
    private router: Router
  ) { }
    
  
  ngOnInit(): void {
    this.nova();
  }

  get f(){
    return this.form.controls;
  }
  
  onSubmit(): void {

		this.submitted = true;
    if(this.form.invalid) {
			return;
		}

    this.operacao = "Edição";
    if (!this.form.valid) {
      this.msgErro = true;
      this.msgSucesso = false;
      console.log(this.msgErro);
      return;
    }
  
   this.service.create(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.msgErro = false;
        this.msgSucesso = true;
        alert('Enviado com sucesso.')
        this.router.navigateByUrl('list-pessoa');
      },
      error: (e) => console.error(e),
    });
  }

  limpar(){
    this.nova();
  }

  nova(): void {
    this.form = this.fb.group({
      tipoPessoa: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      ctps: ['', Validators.required],
      dataNascimento:  ['', Validators.required],
      telefone:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      sexo: ['', Validators.required],
      situacao: 'true'
    });
  }

}