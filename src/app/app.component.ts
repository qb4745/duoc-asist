import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class AppComponent {
  constructor() {}
}