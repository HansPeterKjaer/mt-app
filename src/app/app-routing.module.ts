import { NgModule }              from '@angular/core';
import { Routes, RouterModule} from "@angular/router";

import { WorkoutGeneratorComponent } from './workout-generator/workout-generator.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
    {
      path: 'home',
      component: WorkoutGeneratorComponent
    },
    {
      path: 'blog',
      component: BlogComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
