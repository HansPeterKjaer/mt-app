import { Component, OnInit, Input } from '@angular/core';

import { Exercise } from 'app/models/exercise';
import { StateService } from '../state.service';

@Component({
  selector: 'exercise',
  templateUrl: 'exercise.component.html'
})

export class ExerciseComponent implements OnInit {
  exercise: Exercise = null;

  constructor(private stateService: StateService) { 
  	stateService.exercise$.subscribe(ex => {this.exercise = ex; console.log("Exercise seleced");})
  }

  ngOnInit() {
    console.log(this.exercise);
  }
}
