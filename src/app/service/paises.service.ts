import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPaises,IPaisesUpdate } from '../interface/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  URL= 'http://localhost:8082/Paises'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
