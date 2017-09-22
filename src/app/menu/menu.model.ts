/**
 * menu.model.ts
 */
export class Menu{
	title: 		string;
	link: 		string;
	icon: 		string;
	target: 	string;

	constructor(title: string, link: string, icon: string, target?: string){
		this.title 		= title;
		this.link 		= link;
		this.icon 		= icon;
		this.target 	= target || "";
	}
}