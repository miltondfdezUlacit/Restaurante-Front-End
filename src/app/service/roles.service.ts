import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRoles,IRolesUpdate } from '../interface/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {


  URL= 'http://localhost:8082/Roles'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }

  constructor() { }
}
