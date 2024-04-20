import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmpleados,IEmpleadosUpdate } from '../interface/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  URL= 'http://localhost:8082/Empleados'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }

    constructor(private http:HttpClient) { }
    getEmpleados():Observable<IEmpleados[]>{
      return this.http.get<IEmpleados[]>(this.URL);
    }
    getEmpleado(id:string):Observable<IEmpleados>{
      return this.http.get<IEmpleados>(this.URL+'/'+id);
    }
    addEmpleados(empleados:IEmpleadosUpdate):Observable<IEmpleadosUpdate>{
      return this.http.post<IEmpleadosUpdate>(this.URL,empleados,this.httpOptions);
    }
    updateEmpleados(id:string,empleados:IEmpleadosUpdate):Observable<IEmpleadosUpdate>{
      return this.http.post<IEmpleadosUpdate>(this.URL+'/'+id,empleados,this.httpOptions);
    }
}
