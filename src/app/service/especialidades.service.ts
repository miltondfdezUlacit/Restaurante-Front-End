import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEspecialidades, IEspecialidadesUpdate } from '../interface/especialidades';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  URL= 'http://localhost:8082/especialidades'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
