import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Posts } from 'app/models/Posts';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseURL = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) {}

  getAllByTag(tag: string): Observable<Posts> {
    return this.http.get<Posts>(this.baseURL + '?tag=' + tag);
  }
}
