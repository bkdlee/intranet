import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Intranet';
	is_collapsed = false;

	constructor(){
		this.is_collapsed = false;
	};
}
