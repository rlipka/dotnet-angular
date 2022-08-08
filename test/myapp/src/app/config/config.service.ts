import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  configUrl = 'http://localhost:5000/posts?tag=health';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  public getData() {
    return this.http.get<any>(this.configUrl, this.httpOptions);
  }
}
