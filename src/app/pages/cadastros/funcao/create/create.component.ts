import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { FuncaoService } from '../../../../services/funcao.service';

     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateFuncaoComponent implements OnInit {
    
  form!: FormGroup;
  submitted = false;
  msgErro = false;
  msgSucesso = false;
  operacao = "Cadastro";
  TITULO_PAGINA_CREATE = 'Ficha de Cadastro';
 
  constructor(
    public service: FuncaoService,
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
        this.router.navigateByUrl('list-funcao');
      },
      error: (e) => console.error(e),
    });
  }

  limpar(){
    this.nova();
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required]
    });
  }

}