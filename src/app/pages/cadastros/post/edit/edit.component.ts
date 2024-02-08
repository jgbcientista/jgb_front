import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditPostComponent implements OnInit {
      
  id!: number;
  post!: Post;
  form!: FormGroup;
  submitted = false;
  msgErro = false;
  msgSucesso = false;
  operacao = "Edição";
    
  constructor(
    public service: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    alert(1)
    this.service.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
      
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
    alert('Editado com sucesso.')
   this.service.update(this.id, this.form.value).subscribe({
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

  limpar(){
    this.nova();
  }
}