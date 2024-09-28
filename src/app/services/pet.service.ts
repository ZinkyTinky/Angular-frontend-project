import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from '../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  dataSource: string = "http://localhost:3000/pets";

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pets[]> {
    return this.http.get<Pets[]>(this.dataSource);
  }
}
