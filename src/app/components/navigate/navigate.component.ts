import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {

}
