import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessorPage implements OnInit {


  professorInfoReceived: UserModel | undefined;

  constructor(private router: Router) {
    this.professorInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
   }

  ngOnInit() {
  }

  goToProductList() {
    this.router.navigate(['/productlist']);
  }





}
