import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
	selector: 'app-menu-top',
	templateUrl: './menu-top.component.html',
	styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
	menu_items: Menu[];

	constructor() { 
		this.menu_items = [
			new Menu("Home", ""),
			new Menu("Calendar", "calendar"),
			new Menu("Contact List", "contact-list"),
			new Menu("Gallery", "gallery"),
			new Menu("My Page", "my-page"),
			new Menu("Map", "map"),
		];
	}

	ngOnInit() {
	}

}
