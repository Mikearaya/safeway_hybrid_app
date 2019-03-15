import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogInComponent implements OnInit {
  constructor(
    private authorizationApi: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmitted(userData) {
    this.authorizationApi.logInUser(userData).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['']);
      },
      error => {
        alert('Invalid username or password');
      }
    );
  }
}
