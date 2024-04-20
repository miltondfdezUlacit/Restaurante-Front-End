import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPrivilegios,IPrivilegiosUpdate } from '../interface/privilegios';

@Injectable({
  providedIn: 'root'
})
export class PrivilegiosService {

  URL= 'http://localhost:8082/Privilegios'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
