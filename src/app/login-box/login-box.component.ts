import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
	isVisible = false;
	isConfirmLoading = false;
	title = 'Login';

	showModal = () => {
		this.isVisible = true;
	}

	handleOk = (e) => {
		this.isConfirmLoading = true;
		setTimeout(() => {
			this.isVisible = false;
			this.isConfirmLoading = false;
		}, 3000);
	}

	handleCancel = (e) => {
		this.isVisible = false;
	}

	validateForm: FormGroup;
	_submitForm() {
		for (const i in this.validateForm.controls) {
			this.validateForm.controls[ i ].markAsDirty();
		}
	}
	constructor(private fb: FormBuilder) { }
	ngOnInit() {
		this.validateForm = this.fb.group({
			userName: [ null, [ Validators.required ] ],
			password: [ null, [ Validators.required ] ],
			remember: [ true ]
		});
	}
}
