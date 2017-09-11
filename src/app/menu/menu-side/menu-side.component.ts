import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
	selector: 'app-menu-side',
	templateUrl: './menu-side.component.html',
	styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent implements OnInit {
	isCollapsed = false;
	constructor() { }

	ngOnInit() {
	}

}
