import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient module
import { UserModel } from '../../models/UserModel';
import { Observable } from 'rxjs';

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