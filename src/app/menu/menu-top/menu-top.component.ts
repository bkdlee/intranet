import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
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
			new Menu("Home", "", "anticon-home", true),
			new Menu("Calendar", "calendar", "anticon-calendar", false),
			new Menu("Contact List", "contact-list", "anticon-contacts", false),
			new Menu("Gallery", "gallery", "anticon-picture", false),
			new Menu("My Page", "my-page", "anticon-heart-o", false),
			new Menu("Map", "map", "anticon-environment-o", false),
		];
	}

	ngOnInit() {

	}

}
