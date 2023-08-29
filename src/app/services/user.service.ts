import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: UserModel[] = [];

  addUser(user: UserModel) {
    this.userList.push(user);
  }

  getUserList() {
    return this.userList;
  }
}