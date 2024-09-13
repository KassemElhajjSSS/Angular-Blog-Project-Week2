import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../types';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from '../add-post/add-post.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, CommonModule, AddPostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  animations: [
    trigger('postAnim', [
      // Animation for entering (adding a post)
      transition(':enter', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate('50ms ease-out', style({
          height: '*',
          marginBottom: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate('200ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)',
        }))
      ]),
      
      // Animation for leaving (deleting a post)
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.85)',
          height: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }))
      ])
    ])
  ]
  
})

export class PostListComponent {
  postsList : Post[] = []

  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => this.postsList = posts);
  }

  addPost(post: Post){
    this.postsService.addPost(post).subscribe((post) => this.postsList.push(post));
  }
  
  deletePost(post: Post){
    this.postsService.deletePost(post).subscribe(() =>{
      this.postsList = this.postsList.filter((p) => p.id !== post.id)
    });
  }


}
