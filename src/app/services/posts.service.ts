import { Injectable } from '@angular/core';
import { Post } from '../../types';
import { Observable, throwError, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HandleApiErrorService } from './handle-api-error.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://localhost:5000/posts';

  constructor(private http: HttpClient, private handleErrorsService: HandleApiErrorService) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url).pipe(
      catchError(this.handleErrorsService.handleError)
    );
  }

  getPostById(id: string | null): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/${id}`).pipe(
      catchError(this.handleErrorsService.handleError)
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}`, post, httpOptions).pipe(
      catchError(this.handleErrorsService.handleError)
    );
  }

  deletePost(post: Post): Observable<Post[]> {
    return this.http.delete<Post[]>(`${this.url}/${post.id}`).pipe(
      catchError(this.handleErrorsService.handleError)
    );
  }


  

}
