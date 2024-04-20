import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITecnologias,ITecnologiasUpdate } from '../interface/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  URL= 'http://localhost:8082/Tecnologias'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
