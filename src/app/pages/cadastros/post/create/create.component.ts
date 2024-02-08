import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreatePostComponent implements OnInit {
    
  form!: FormGroup;
  submitted = false;
  msgErro = false;
  msgSucesso = false;
  operacao = "Cadastro";
 
  constructor(
    public service: PostService,
    private router: Router
  ) { }
    
  
  ngOnInit(): void {
    this.nova();
  }


  nova(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
      
    });
  }
  
  get f(){
    return this.form.controls;
  }
    
   
  // submit(){
  //   console.log(this.form.value);
  //   this.service.create(this.form.value).subscribe((res:any) => {
  //        console.log('Post created successfully!');
  //        this.router.navigateByUrl('list-post');
  //   })
  // }

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
    alert('Enviado com sucesso.')
   this.service.create(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.msgErro = false;
        this.msgSucesso = true;
        this.router.navigateByUrl('list-post');
      },
      error: (e) => console.error(e),
    });
  }

  alterar(){

  }

  limpar(){
    this.nova();
  }
  
  
}