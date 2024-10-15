import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigateComponent } from './components/navigate/navigate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd_Angular';
}




