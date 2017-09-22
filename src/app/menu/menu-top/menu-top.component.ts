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
			new Menu("Home", "", "anticon-home"),
			new Menu("Calendar", "calendar", "anticon-calendar"),
			new Menu("Contact List", "contact-list", "anticon-contacts"),
			new Menu("Gallery", "gallery", "anticon-picture"),
			new Menu("My Page", "my-page", "anticon-heart-o"),
			new Menu("Map", "map", "anticon-environment-o"),
		];
	}

	ngOnInit() {
	}

}
