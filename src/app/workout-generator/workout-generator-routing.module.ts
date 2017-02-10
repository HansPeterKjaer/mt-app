import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutGeneratorComponent } from './workout-generator.component';
//import { WorkoutComponent } from './workout/workout.component';
//import { GeneratorFormComponent } from './generator-form.component';


const workoutGeneratorRoutes: Routes = [
  {
    path: 'home/:id',
    component: WorkoutGeneratorComponent,
  },
  {
    path: 'home',
    component: WorkoutGeneratorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(workoutGeneratorRoutes)],
  exports: [RouterModule],
  providers: []
})

export class WorkoutGeneratorRoutingModule { }