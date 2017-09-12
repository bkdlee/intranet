/**
 * article.model.ts
 * Provides a `Article` Object
 */
export class Article {
	constructor(
		public article_id: number,
		public title: string,
		public alias: string,
		public content: string,
		public state: number,
		public category_id: number,
		public created: Date,
		public created_by: number,
		public modified: Date,
		public modified_by: number,
		public ordering: number,
		public hits: number
	){}
}
