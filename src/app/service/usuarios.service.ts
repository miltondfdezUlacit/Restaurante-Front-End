import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsuarios,IUsuariospdate } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL= 'http://localhost:8082/Usuarios'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


  constructor() { }
}
