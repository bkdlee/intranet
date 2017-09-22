/**
 * contact.model.ts
 */
export class Contact{
	name: 		string;
	avatar:		string;
	address: 	string;
	phone:		string;

	constructor(name: string, avatar: string, address: string, phone: string){
		this.name 		= name;
		this.avatar 	= avatar;
		this.address 	= address;
		this.phone 		= phone;
	}
}