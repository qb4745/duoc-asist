import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationController, IonModal, IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { IUserForgotPassword } from 'src/app/models/IUserForgotPassword';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  userLoginModal = {
    username: '',
    password: '',
  };

  userForgotPasswordModal = {
    username: '',
  };

  @ViewChild('modal') modal: IonModal | undefined;

  hardcodedUsers: UserModel[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        email: 'pedro@duocuc.cl',
        firstName: 'Pedro',
        lastName: 'Martínez',
        rut: '8888888-8',
        userType: 'STUDENT',
        isEnabled: true,
        phone: '345-678-9012',
        address: '789 Chef St',
        username: 'pmartinez',
        password: 'pedro123'
    },
    {
        id: 4,
        email: 'laura@duocuc.cl',
        firstName: 'Laura',
        lastName: 'Rodríguez',
        rut: '9999999-9',
        userType: 'PROFESSOR',
        isEnabled: true,
        phone: '456-789-0123',
        address: '012 Baker St',
        username: 'lrodriguez',
        password: 'laura123'
    },
    {
        id: 5,
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


  forgotPasswordResult: string = "";
  userNameError: string = "";
  passwordError: string = "";

  listUser: UserModel[] = [];

  constructor(private animationCtrl: AnimationController, private route: Router, private userService: UserService,
             ) {}

  generateRandomPassword(length: number): string {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=<>?';

    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }

    return password;
  }


  ngOnInit() {
    this.userLoginModalRestart();
    this.userForgotPasswordModalRestart();
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers];
  }

  userForgotPassword(userLoginInfo: IUserForgotPassword): void{
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers.slice(0, serviceUsers.length)];
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username)){
        console.log('User Found...', this.userForgotPasswordModal.username);
        // Generar nueva contraseña
        //const newPassword = this.generateRandomPassword(8);
        const newPassword = "1234";
        this.listUser[i].password = newPassword;
        const emailToUser = `Hola ${this.listUser[i].username}, tu nueva contraseña es: ${this.listUser[i].password}`;
        console.log(emailToUser);
        this.forgotPasswordResult = emailToUser;
        this.userForgotPasswordModalRestart();
        return;
      }

    }
    this.forgotPasswordResult = "Usuario no encontrado, intente nuevamente.";
    this.userForgotPasswordModalRestart();
  }


  userLogin(userLoginInfo: IUserLogin): boolean{
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers.slice(0, serviceUsers.length)];
    for(let i = 0; i < this.listUser.length; i++){

      if((this.listUser[i].username != userLoginInfo.username)){
        this.userNameError = "Nombre de Usuario incorrecto.";
      }
      else if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        this.userNameError = "";
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]

          }
        }
        if(this.listUser[i].userType == 'STUDENT'){
          const id = this.listUser[i].id;
          this.userLoginModalRestart();
          let sendInfo = this.route.navigate([`/student/${id}`], userInfoSend);
          return true;
        }else{
          const id = this.listUser[i].id;
          this.userLoginModalRestart();
          let sendInfo = this.route.navigate([`/professor/${id}`], userInfoSend);
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

  userForgotPasswordModalRestart(): void {
    this.userLoginModal.username = '';
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

  ngAfterViewInit() {
    if (this.modal) {
      const enterAnimation = (baseEl: HTMLElement) => {
        const backdropEl = baseEl.querySelector('.backdrop') as HTMLElement;

        const backdropAnimation = this.animationCtrl
          .create()
          .addElement(backdropEl)
          .keyframes([
            { offset: 0, opacity: '0.01' },
            { offset: 1, opacity: 'var(--backdrop-opacity)' },
          ]);

        const wrapperAnimation = this.animationCtrl
          .create()
          .addElement(baseEl.shadowRoot?.querySelector('.modal-wrapper') as HTMLElement)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' },
          ]);

        return this.animationCtrl
          .create()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
      };

      const leaveAnimation = (baseEl: HTMLElement) => {
        return enterAnimation(baseEl).direction('reverse');
      };

      this.modal.enterAnimation = enterAnimation;
      this.modal.leaveAnimation = leaveAnimation;
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.dismiss();
    }
  }


}
