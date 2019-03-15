import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bionic-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  @Output()
  public submitted: EventEmitter<LogInModel> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(): void {
    this.logInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get userName(): FormControl {
    return this.logInForm.get('userName') as FormControl;
  }

  get password(): FormControl {
    return this.logInForm.get('password') as FormControl;
  }

  onSubmit(): void {
    const logInModel = this.prepareFormData();

    if (logInModel) {
      this.submitted.emit(logInModel);
    }
  }

  prepareFormData(): LogInModel | null {
    if (this.logInForm.valid) {
      return {
        username: this.userName.value,
        password: this.password.value
      };
    } else {
      return null;
    }
  }
}

export class UserViewModel {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
}

export class LogInModel {
  username: string;
  password: string;
}
