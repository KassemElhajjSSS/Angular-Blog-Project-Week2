import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  {
  @Input() post! : Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();

  onDelete(post : Post){
    this.onDeletePost.emit(post)
  }

}
