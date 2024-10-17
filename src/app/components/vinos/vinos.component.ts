// components/vinos/vinos.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule para standalone
import { CommonModule } from '@angular/common';
import { VinosService } from '../../services/vinos.service';  // Importar el servicio
import { Vinos } from '../../models/vinos.model';  // Importar el modelo

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css'],
  standalone: true,  // El componente es standalone
  imports: [CommonModule, HttpClientModule]  // Importar HttpClientModule
})
export class VinosComponent implements OnInit {
  vinos: Vinos[] = [];  // Array para almacenar la lista de vinos

  constructor(private vinosService: VinosService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener la lista de vinos
    this.vinosService.getVinos().subscribe((data: Vinos[]) => {
      this.vinos = data;
      console.log('Lista de vinos:', this.vinos);  // Verificar en la consola si los datos se obtienen correctamente
    });
  }
}

