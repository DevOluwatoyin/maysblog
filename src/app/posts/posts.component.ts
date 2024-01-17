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
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPosts = 0;
  renderedPages:number = 0;

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    const skip = (this.currentPage - 1) * this.itemsPerPage;

    this.http
      .get('https://dummyapi.io/data/v1/post', {
        headers: {
          'app-id': '65a678af25c0e221a05246c6',
        },
        params: {
          limit: this.itemsPerPage.toString(),
          skip: skip.toString(),
        },
      })
      .subscribe((postsData: any) => {
        this.posts = postsData.data;
        this.totalPosts = postsData.total; 
        console.log(this.totalPosts);
        console.log(this.posts);

        this.renderedPages = Math.ceil(this.totalPosts / this.itemsPerPage);
      });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchPosts();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.totalPosts / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.fetchPosts();
    }
  }
}
