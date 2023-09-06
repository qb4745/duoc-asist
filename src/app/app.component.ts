import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
})
export class AppComponent {
  constructor() {}
}