import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HorariosService } from 'src/app/services/horarios/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HorariosPage implements OnInit {

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

  goToDocente() {
    const id = this.idUserHtmlRouterLink;
    this.router.navigate([`/Docente/${id}`], {
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
