import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { HorariosService } from 'src/app/services/horarios/horarios.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ScheduleDetailsPage implements OnInit {

  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;
  selectedAlumno: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private dataUsuarios: HorariosService) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);

    // cargar el archivo JSON filtrado por id
    const filePath = 'assets/data/dataUsuarios.json';
    const AlumnoId = this.idUserHtmlRouterLink; // El ID del estudiante que deseas obtener

    this.dataUsuarios.getAlumnoById(filePath, AlumnoId).subscribe(Alumno => {
      this.selectedAlumno = Alumno;
      console.log("horarios estudiante:", this.selectedAlumno); // Aquí tendrás el estudiante con el ID correspondiente
    });

  }

  ngOnInit() {
  }

  goToAlumno() {
    const id = this.idUserHtmlRouterLink;
    this.router.navigate([`/Alumno/${id}`], {
      state: {
        user: this.userInfoReceived
      }
    });
  }


  isFirstAsignaturaInGroup(asignatura: any): boolean {
    const primeraAsignatura = this.selectedAlumno.asignaturas.find(
      (a: any) => a.nombre === asignatura.nombre
    );
    return asignatura === primeraAsignatura;
  }



}
