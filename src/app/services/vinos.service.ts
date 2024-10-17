import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vinos } from '../models/vinos.model';

@Injectable({
  providedIn: 'root'
})
export class VinosService {

  private apiUrl = 'http://localhost:3000/api/wine';

  constructor(private http: HttpClient) {}

  getVinos(): Observable<Vinos[]> {
    return this.http.get<Vinos[]>(this.apiUrl);
  }

  // // Eliminar una experiencia por su ID
  // deleteVino(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
