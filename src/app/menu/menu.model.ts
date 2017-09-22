/**
 * menu.model.ts
 */
export class Menu{
	title: 			string;
	link: 			string;
	icon: 			string;
	is_selected: 	boolean;
	target: 		string;

	constructor(title: string, link: string, icon: string, is_selected: boolean, target?: string){
		this.title 			= title;
		this.link 			= link;
		this.icon 			= icon;
		this.is_selected 	= is_selected;
		this.target 		= target || "";
	}
}