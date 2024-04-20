import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPuestos,IPuestosUpdate } from '../interface/puestos';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  URL= 'http://localhost:8082/Puestos'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
