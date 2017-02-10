import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutGeneratorRoutingModule } from './workout-generator-routing.module';
import { WorkoutGeneratorComponent } from './workout-generator.component';
import { FormsModule } from '@angular/forms';

import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseThumbnailComponent } from './exercise/exercise-thumbnail.component';
import { GeneratorFormComponent } from './generator-form/generator-form.component';
import { WorkoutGeneratorService } from './workout-generator.service';
import { StateService } from './state.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkoutGeneratorRoutingModule
  ],
  declarations: [WorkoutGeneratorComponent, WorkoutComponent, ExerciseComponent, ExerciseThumbnailComponent, GeneratorFormComponent],
  providers: [WorkoutGeneratorService, StateService]
})
export class WorkoutGeneratorModule { }
