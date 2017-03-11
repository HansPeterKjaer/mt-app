import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogComponent }     from './blog.component';

const routes: Routes = [
	{
		path: 'blog',
		component: BlogComponent,
		children: [
			{
				path: '',
				component: BlogIndexComponent
			},
			{
				path: 'post/:id',
				component: BlogIndexComponent
			},
			{
				path: 'page/:id',
				component: BlogIndexComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class BlogRoutingModule { }
