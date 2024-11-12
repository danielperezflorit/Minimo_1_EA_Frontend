// services/hobby.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hobby } from '../models/hobbies.model';

@Injectable({
  providedIn: 'root',
})
export class HobbyService {
  private apiUrl = 'http://localhost:3000/api/hobbies'; 

  constructor(private http: HttpClient) {}

  // Obtener todos los hobbies
  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(this.apiUrl);
  }

  // Agregar un nuevo hobby
  addHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<Hobby>(`${this.apiUrl}`, hobby);
  }

  // Actualizar un hobby existente
  updateHobby(id: string, hobby: Hobby): Observable<Hobby> {
    return this.http.put<Hobby>(`${this.apiUrl}/${id}`, hobby);
  }

  // Eliminar un hobby
  deleteHobby(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

