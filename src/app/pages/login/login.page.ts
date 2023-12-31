import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  hardcodedUsers: UserModel[] = [
    {
        id: 6,
        email: 'juan@duocuc.cl',
        firstName: 'Juan',
        lastName: 'González',
        rut: '6666666-6',
        userType: 'STUDENT',
        isEnabled: true,
        phone: '123-456-7890',
        address: '123 Worker St',
        username: 'juang',
        password: 'juang123'
    },
    {
        id: 7,
        email: 'maria@duocuc.cl',
        firstName: 'Maria',
        lastName: 'López',
        rut: '7777777-7',
        userType: 'STUDENT',
        isEnabled: true,
        phone: '234-567-8901',
        address: '456 Baker St',
        username: 'mlopez',
        password: 'maria123'
    },
    {
        id: 8,
        email: 'pedro@duocuc.cl',
        firstName: 'Pedro',
        lastName: 'Martínez',
        rut: '8888888-8',
        userType: 'PROFESSOR',
        isEnabled: true,
        phone: '345-678-9012',
        address: '789 Chef St',
        username: 'pmartinez',
        password: 'pedro123'
    },
    {
        id: 9,
        email: 'laura@duocuc.cl',
        firstName: 'Laura',
        lastName: 'Rodríguez',
        rut: '9999999-9',
        userType: 'STUDENT',
        isEnabled: true,
        phone: '456-789-0123',
        address: '012 Baker St',
        username: 'lrodriguez',
        password: 'laura123'
    },
    {
        id: 10,
        email: 'carlos@duocuc.cl',
        firstName: 'Carlos',
        lastName: 'Gómez',
        rut: '10101010-0',
        userType: 'PROFESSOR',
        isEnabled: true,
        phone: '567-890-1234',
        address: '234 Pastry St',
        username: 'cgomez',
        password: 'carlos123'
    },
];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };
  listUser: UserModel[] = [];

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit() {
    this.userLoginModalRestart();
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers];
  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers.slice(0, serviceUsers.length)];
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        console.log('listo');
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]

          }
        }
        if(this.listUser[i].userType == 'STUDENT'){
          let sendInfo = this.route.navigate(['/student'], userInfoSend);
          console.log('listo');
          return true;
        }else{
          let sendInfo = this.route.navigate(['/professor'], userInfoSend);
          return true;
        }

      }
    }
    this.userLoginModalRestart();
    return false;

  }


  userLoginModalRestart(): void {
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }

  goToRegistrar() {
    this.route.navigate(['/registrar']);
  }

  printListUser(): void {
    console.log(this.listUser);
  }

  printUserService(): void {
    console.log(this.userService);
  }
}
