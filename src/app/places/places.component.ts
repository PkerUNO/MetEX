import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlacesGQL, PlacesQuery } from '../../generated/graphql';

@Component({
	templateUrl: './places.component.html',
	styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
	public places!: Observable<PlacesQuery['places']>;

	constructor(private placesGQL: PlacesGQL) { }

	ngOnInit(): void {
		this.places = this.placesGQL
			.watch()
			.valueChanges.pipe(map(data => data.data.places));
	}
}
