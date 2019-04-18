import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';
import {  Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'bionic-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesComponent implements OnInit {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  public items: ItemModel[] = [
    {
      text: 'Article Category',
      id: 'article_catagory'
    },
    {
      text: 'Articles',
      id: 'article'
    }
  ];
  public complains: ItemModel[] = [
    {
      text: 'Complain types',
      id: 'complain_type'
    },
    {
      text: 'Complains',
      id: 'complains'
    }
  ];

  public settings: ItemModel[] = [
    {
      text: 'USERS',
      id: 'users'
    },
    {
      text: 'UPDATE PROFILE',
      id: 'profile_update'
    },
    {
      text: 'CHANGE PASSWORD',
      id: 'password_update'
    }
  ];

  public lessonTypes: ItemModel[] = [
    {
      text: 'Lesson Types',
      id: 'lesson_type'
    },
    {
      text: 'Schools',
      id: 'schools'
    }
  ];

  dashboard: DashboardStatModel;
  ngOnInit() {

  }
  articleClick($event) {
    switch ($event.item.properties.id.trim().toUpperCase()) {
      case 'ARTICLE':
        this.router.navigate(['/articles']);
        break;
      case 'ARTICLE_CATAGORY':
        this.router.navigate(['/articles/catagory']);
        break;

      default:
        break;
    }
  }

  complainClick($event) {
    switch ($event.item.properties.id.trim().toUpperCase()) {
      case 'COMPLAINS':
        this.router.navigate(['/complains']);
        break;
      case 'COMPLAIN_TYPE':
        this.router.navigate(['/complains/type']);
        break;

      default:
        break;
    }
  }

  schoolClick($event) {
    switch ($event.item.properties.id.trim().toUpperCase()) {
      case 'SCHOOLS':
        this.router.navigate(['/schools']);
        break;
      case 'LESSON_TYPE':
        this.router.navigate(['/schools/lesson-types']);
        break;

      default:
        break;
    }
  }

  settingClick($event) {
    switch ($event.item.properties.id.trim().toUpperCase()) {
      case 'USERS':
        this.router.navigate([`/users`]);
        break;
      case 'PROFILE_UPDATE':
        const user = this.authorizationService.readToken();
        this.router.navigate([`/users/${user.id}/update`]);
        break;
      case 'PASSWORD_UPDATE':
        this.router.navigate(['/users/password-update']);
        break;

      default:
        break;
    }
  }

  logOut() {
    this.authorizationService.logout();
  }
}

export class DashboardStatModel {
  agencies_count: number;
  forum_count: number;
  hospital_count: number;
  emergency_contact_count: number;
  article_count: number;
  school_count: number;
  news_count: number;
  complain_count: number;
}
