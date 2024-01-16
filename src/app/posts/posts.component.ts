import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'blog-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  http = inject(HttpClient);
  posts: any[] = [];

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http
      .get('https://dummyapi.io/data/v1/post', {
        headers: {
          'app-id': '65a678af25c0e221a05246c6',
        },
      })
      .subscribe((postsData: any) => {
        this.posts = postsData.data;
      });
  }
}
