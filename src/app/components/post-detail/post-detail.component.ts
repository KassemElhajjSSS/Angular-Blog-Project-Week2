import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../types';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  private url = 'http://localhost:5000/posts'; //this is backend server, it is not related to the frontend server
  post : any

  constructor(private postsService: PostsService, private route : ActivatedRoute){}

  ngOnInit(): void {
    const postId: string | null = this.route.snapshot.paramMap.get('id');
    this.postsService.getPostById(postId).subscribe(post => {
      this.post = post;
  });
  }

}
