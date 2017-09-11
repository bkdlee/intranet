import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	public options: Object = {
		placeholderText: 'Edit Your Content Here!',
		initOnClick: true
		//editInPopup: true
		//charCounterCount: false
	}

	constructor() { }

	private edit(){

	}

	ngOnInit() {

	}

}
