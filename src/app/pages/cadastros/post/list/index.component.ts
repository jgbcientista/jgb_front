import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

 export class IndexComponent implements OnInit {

constructor(public postService: PostService) { }  
  paginaAtual = 1;
  posts: Post[] = [];
  possuiRegistros = false;

  ngOnInit(): void { };

findFilter(){
  this.postService.getAll().subscribe((data: Post[]) => {
    this.posts = data
    this.possuiRegistros = true;
  });
}

  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Item deletado com sucesso.');
    })
  }


}
 

