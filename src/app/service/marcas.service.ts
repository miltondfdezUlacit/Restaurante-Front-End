import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMarcas,IMarcasUpdate } from '../interface/marcas';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  URL= 'http://localhost:8082/Marcas'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
