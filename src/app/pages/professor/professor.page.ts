import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfessorPage implements OnInit {


  professorInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.professorInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: id #",this.idUserHtmlRouterLink);



  }


  ngOnInit() {
  }

  goToHorarios() {
    const id = this.idUserHtmlRouterLink;
    this.router.navigate([`/horarios/${id}`], {
      state: {
        user: this.professorInfoReceived
      }
    });
  }





}
