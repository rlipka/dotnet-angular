import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.config = new ConfigService(http);
  }

  private config: ConfigService;

  data: any;

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.config.getData().subscribe(
      (data: any) =>
        (this.data = {
          heroesUrl: data.heroesUrl,
          textfile: data.textfile,
          date: data.date,
        })
    );
  }
}
