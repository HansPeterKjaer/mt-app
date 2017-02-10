import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

//import { Workout } from './Workout';
//import { Exercise } from './Exercise';
import { StateService } from './state.service';

@Component({
	selector: 'app-workout-generator',
	templateUrl: './workout-generator.component.html',
	styleUrls: ['./workout-generator.component.less']
})
export class WorkoutGeneratorComponent implements OnInit {

	constructor( private stateService: StateService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		// load data;
	}

}
