import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IComestibles,IComestiblesUpdate } from '../interface/comestibles';

@Injectable({
  providedIn: 'root'
})
export class ComestiblesService {

  URL= 'http://localhost:8082/Comestibles'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
