import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {UserViewModel, User } from './user.model';

@Injectable()
export class UserApiService {
  private controller = 'users';

  constructor(private httpClient: HttpClient) {}

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.controller}/${userId}`);
  }

  getAllUsers(): Observable<UserViewModel[]> {
    return this.httpClient.get<UserViewModel[]>(`${this.controller}`);
  }

  createUser(newUser: User): Observable<UserViewModel> {
    return this.httpClient.post<UserViewModel>(`${this.controller}`, newUser);
  }

  updateUser(updatedUser: User): Observable<void> {
    return this.httpClient.post<void>(
      `${this.controller}/update/${updatedUser.user.ID}`,
      updatedUser
    );
  }

  deleteUser(userId: number[]): Observable<void> {
    const idArr: any[] = [];
    userId.forEach(id => idArr.push({ id: `${id}` }));
    return this.httpClient.post<void>(`${this.controller}/delete`, idArr);
  }
}
