import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from './components/header/header.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatButtonModule, HomeComponent,HeaderComponent,RouterOutlet]
})
export class AppComponent {
  title="my product management";
  a=5;
  b=6;
}
