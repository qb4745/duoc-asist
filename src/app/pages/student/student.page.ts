import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationController, IonModal, IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StudentPage implements OnInit {
  @ViewChild('modal') modal: IonModal | undefined;

  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  constructor(private animationCtrl: AnimationController, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
  }

  ngOnInit() {}

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
