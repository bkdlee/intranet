import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
	//@Input() elementId: String;
	@Output() onEditorKeyup = new EventEmitter<any>();
	editor;

	ngAfterViewInit(){
		tinymce.init({
			selector: '#editor',
			plugins: ['link', 'paste', 'table'],
			skin_url: 'assets/skins/lightgray',
			setup: editor => {
				this.editor = editor;
				editor.on('keyup', () => {
					const content = editor.getContent();
					this.onEditorKeyup.emit(content);
				});
			},
		});
	}

	ngOnDestroy() {
		tinymce.remove(this.editor);
	}

	constructor() { }

	ngOnInit() {
	}

}
