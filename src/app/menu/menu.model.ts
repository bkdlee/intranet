/**
 * menu.model.ts
 */
export class Menu{
	title: 		string;
	link: 		string;
	target: 	string;

	constructor(title: string, link: string, target?: string){
		this.title 		= title;
		this.link 		= link;
		this.target 	= target || "";
	}
}