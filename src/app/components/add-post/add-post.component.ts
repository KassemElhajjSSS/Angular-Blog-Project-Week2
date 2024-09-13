import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../types';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  @Output() onSubmitPost: EventEmitter<Post> = new EventEmitter();
  title!: string;
  text!: string;
  
   

  onSubmit(){
    if (!this.title || !this.text) {
      alert('Both fields are required. So please enter the title and the content!');
      return;
    }
    const post: Post = {
      title: this.title,
      text: this.text,
      Date: new Date
    };
    this.onSubmitPost.emit(post)
    this.title = ''
    this.text = ''

  }

}
