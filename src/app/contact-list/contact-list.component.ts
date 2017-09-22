import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	contacts: Contact[];

	constructor() { 
		this.contacts = [
			new Contact("Jay Lee", "avatar/jay.jpg", "63 Nigel Road", "021 719 899"),
			new Contact("David Higgs", "avatar/david_higgs.jpg", "Address 1", "027 534 4517"),
			new Contact("Emily Puhi", "avatar/emily_puhi.jpg", "Address 1", "021 0818 0486"),
		];
	}

	ngOnInit() {

	}

}
