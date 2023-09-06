import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/IUser'; // Update the import for IUser
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegistrarPage {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      id: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      rut: ['', Validators.required],
      userType: ['', Validators.required],
      isEnabled: [true, Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createUser() {
    if (this.userForm.valid) {
      const newUser: IUser = this.userForm.value; // Use IUser type here
      console.log('New user:', newUser);

      this.userService.addUser(newUser);
      this.goToLogin();
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  printUserService() {
    console.log(this.userService);
  }


}