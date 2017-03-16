import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { BlogService } from '../blog.service';
import { BlogPost } from 'app/models/blog-post';

@Component({
	selector: 'blog-post',
	templateUrl: 'blog-post.component.html'
})
export class BlogPostComponent implements OnInit {
	
	private post: BlogPost;
	
	constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {

	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
        	let slug = params['slug'];
        	this.blogService.getPost(slug).then(post => this.post = post)
      	});
	}
}
