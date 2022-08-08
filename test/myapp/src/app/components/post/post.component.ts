import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'app/models/Post';
import { Posts } from 'app/models/Posts';
import { PostService } from 'app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService, private fb: FormBuilder) {
    this.createForm();
  }

  public data: Post[];
  public form: FormGroup;

  ngOnInit(): void {
    this.fetch();
  }

  createForm() {
    this.form = this.fb.group({
      search: ['tech', Validators.required],
    });
  }

  fetch() {
    this.postService.getAllByTag(this.form.value.search).subscribe(
      ({ posts }: Posts) => {
        this.data = posts;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
