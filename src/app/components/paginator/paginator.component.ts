import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  // Un array de números para representar las páginas
  pages: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  // Un array de arrays para almacenar los datos por página
  pageContents: string[][] = [
    ['Contenido de la página 1'],
    ['Contenido de la página 2'],
    ['Contenido de la página 3'],
    ['Contenido de la página 4'],
    ['Contenido de la página 5'],
    ['Contenido de la página 6'],
    ['Contenido de la página 7'],
    ['Contenido de la página 8'],
    ['Contenido de la página 9'],
    ['Contenido de la página 10']
  ];

  // Índice de la página actualmente seleccionada
  currentPage: number = 1;

  // Función para cambiar la página cuando se hace clic en un número
  changePage(page: number): void {
    this.currentPage = page;
  }
}
