import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password-input',
  templateUrl: './change-password-input.component.html',
  styleUrls: ['./change-password-input.component.scss']
})
export class ChangePasswordInputComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validOldPassword], 
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    })
  }

  get oldPassword() {return this.form.get('oldPassword')}
  get newPassword() {return this.form.get('newPassword')}
  get confirmPassword() {return this.form.get('confirmPassword')}
}
