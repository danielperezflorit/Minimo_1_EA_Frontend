// components/hobbies/hobbies.component.ts
import { Component, OnInit } from '@angular/core';
import { Hobby } from '../../models/hobbies.model';
import { HobbyService } from '../../services/hobbies.service';
import { FormsModule, NgForm } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class HobbiesComponent implements OnInit {
  hobbies: Hobby[] = [];
  nuevoHobby: Hobby = { nombre: '', tipo: '', nivel_popularidad: 0 };
  hobbyEdicion: Hobby | null = null;

  constructor(private hobbyService: HobbyService) {}

  ngOnInit(): void {
    this.getHobbies();
  }

  // Obtener todos los hobbies
  getHobbies(): void {
    this.hobbyService.getHobbies().subscribe(
      (data: Hobby[]) => {
        this.hobbies = data;
      },
      (error) => {
        console.error('Error al obtener hobbies:', error);
      }
    );
  }

  // Agregar un nuevo hobby
  agregarHobby(): void {
    this.hobbyService.addHobby(this.nuevoHobby).subscribe(
      (hobby) => {
        this.hobbies.push(hobby);
        this.nuevoHobby = { nombre: '', tipo: '', nivel_popularidad: 0 };
      },
      (error) => {
        console.error('Error al agregar hobby:', error);
      }
    );
  }

  // Preparar edición de un hobby
  prepararEdicion(hobby: Hobby): void {
    this.hobbyEdicion = { ...hobby };
  }

  // Actualizar el hobby en edición
  actualizarHobby(): void {
    if (this.hobbyEdicion && this.hobbyEdicion._id) {
      this.hobbyService.updateHobby(this.hobbyEdicion._id, this.hobbyEdicion).subscribe(
        (hobbyActualizado) => {
          const index = this.hobbies.findIndex((h) => h._id === hobbyActualizado._id);
          if (index !== -1) this.hobbies[index] = hobbyActualizado;
          this.hobbyEdicion = null;
        },
        (error) => {
          console.error('Error al actualizar hobby:', error);
        }
      );
    }
  }

  // Eliminar un hobby
  eliminarHobby(id: string): void {
    this.hobbyService.deleteHobby(id).subscribe(
      () => {
        this.hobbies = this.hobbies.filter((h) => h._id !== id);
      },
      (error) => {
        console.error('Error al eliminar hobby:', error);
      }
    );
  }
}

