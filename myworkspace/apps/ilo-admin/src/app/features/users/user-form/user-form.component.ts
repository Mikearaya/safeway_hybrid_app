import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserApiService } from '../user-api.service';
import { UserViewModel } from 'libs/authorization/src/lib/log-in/log-in.component';
import { UserModel, User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public isUpdate: Boolean;
  public userForm: FormGroup;
  public rolesList: any[] = [];
  private userId: number;

  public roleFields: { text: string; value: string };

  constructor(
    private userApi: UserApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.usersForm();
    this.roleFields = { text: 'name', value: 'id' };
  }

  ngOnInit(): void {
    // get user is from route parameter if it exists
    this.userId = +this.activatedRoute.snapshot.paramMap.get('userId');
    this.isUpdate = false;
    if (this.userId) {
      // if user id exist get value and initialize form
      this.isUpdate = true;
      this.userApi
        .getUserById(this.userId)
        .subscribe((user: User) => this.initilizeForm(user));
    }
  }

  // ─── INTIALIZING USERS FORM ─────────────
  usersForm(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initilizeForm(user: User): void {
    this.userForm = this.formBuilder.group({
      id: [user.user.ID, Validators.required],
      userName: [user.user.username, Validators.required],
      fullName: [user.user.fullname, Validators.required]
    });
  }

  get userName(): FormControl {
    return this.userForm.get('userName') as FormControl;
  }
  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get fullName(): FormControl {
    return this.userForm.get('fullName') as FormControl;
  }

  private prepareFormData(): User | null {
    let userData: User = new User();

    if (this.userForm.valid) {
      userData.user = {
        ID: this.userId,
        username: this.userName.value,
        fullname: this.fullName.value,
        password: this.password.value
      };
      return userData;
    }

    return null;
  }

  onSubmit(): void {
    const data = this.prepareFormData();

    if (data) {
      if (this.userId && data != null) {
        this.userApi.updateUser(data).subscribe(
          () => {
            alert('User Updated Successfuly!!!');
            this.userForm.reset();
          },
          error => {
            alert(
              'Error Occured while attempting to create user try again later!!!'
            );
          }
        );
      } else {
        this.userApi.createUser(data).subscribe(
          () => {
            alert('User Created Successfuly!!!');
            this.userForm.reset();
          },
          error => {
            alert(
              'Unknown Error Occured while updating user data, try again later'
            );
          }
        );
      }
    }
  }

  onDelete(): void {
    if (this.userId) {
      this.userApi.deleteUser([this.userId]).subscribe(
        () => {
          alert('User Deleted successfuly');
        },
        error => {
          alert('Unable to delete user, please try again later');
        }
      );
    }
  }
}
