import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'blog-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  http = inject(HttpClient);

  constructor() {
    this.http
      .get('https://dummyapi.io/data/v1/post', {
        headers: {
          'app-id': '65a678af25c0e221a05246c6',
        },
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
