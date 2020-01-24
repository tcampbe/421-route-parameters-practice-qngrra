import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog
  constructor(private blogService : BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    //import the active route service
    //extract the id from the route
   const id = +this.route.snapshot.params['id'];

   this.blog = this.blogService.getBlogs().find(b => b.id === id);
  }

}