import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';

import { EditPostComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create/create.component';
import { ViewPostComponent } from './view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IndexComponent } from './list/index.component';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    IndexComponent, CreatePostComponent, EditPostComponent
  ],
  declarations: [
    IndexComponent, ViewPostComponent, CreatePostComponent, EditPostComponent
  ],
  providers: [
    CreatePostComponent, EditPostComponent
  ],
})
export class PostModule { }