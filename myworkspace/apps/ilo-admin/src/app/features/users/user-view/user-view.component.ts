import { ActivatedRoute, Router } from '@angular/router';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { closest } from '@syncfusion/ej2-base';
import {
  Column,
  CommandModel,
  EditSettingsModel,
  FilterSettingsModel,
  GridComponent,
  IRow,
  PageSettingsModel,
  SortSettingsModel,
  TextWrapSettingsModel,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserViewModel } from 'libs/authorization/src/lib/log-in/log-in.component';
import { UserApiService } from '../user-api.service';
import { CustomGridColumns } from '@bionic/shared-component';
import { AuthorizationService } from '../../../authorization.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  @ViewChild('grid')
  public grid: GridComponent;

  public data: UserViewModel[];
  public wrapSettings: TextWrapSettingsModel;

  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'id',
      header: 'ID',
      visible: false,
      type: 'string',
      width: 40
    },
    {
      key: 'username',
      header: 'UserName',
      visible: true,
      type: 'string'
    },
    {
      key: 'fullname',
      header: 'Phonenumber',
      visible: true,
      type: 'string',
      width: 100
    },
    {
      key: 'email',
      header: 'E-mail',
      visible: true,
      type: 'string',
      width: 100
    }
  ];

  constructor(
    private userApi: UserApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthorizationService
  ) {}
  dataBound() {}

  ngOnInit(): void {
    this.authService.readToken();
    this.userApi
      .getAllUsers()
      .subscribe((userView: any[]) => (this.data = userView));
  }

  deleteUser(args: any): void {
    this.userApi.deleteUser(args.ID).subscribe(
      () => {
        alert('User deleted');
        this.grid.deleteRecord();
      },
      error => {
        alert('Unable to Delete User');
      }
    );
  }
}
