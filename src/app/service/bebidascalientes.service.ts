import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBebidasCalientes, IBebidasCalientesUpdate } from '../interface/bebidascalientes';


@Injectable({
  providedIn: 'root'
})


export class BebidasCalientesService {

  URL='http://localhost:8082/Bebidascalientes'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }

    constructor(private http:HttpClient) { }
    getBebidasCalientes():Observable<IBebidasCalientes[]>{
      return this.http.get<IBebidasCalientes[]>(this.URL);
    }
    getBebidaCaliente(id:string):Observable<IBebidasCalientes>{
      return this.http.get<IBebidasCalientes>(this.URL+'/'+id);
    }
    addBebidasCalientes(bebidascalientes:IBebidasCalientesUpdate):Observable<IBebidasCalientes>{
      return this.http.post<IBebidasCalientes>(this.URL,bebidascalientes,this.httpOptions);
    }
    updateBebidasCalientes(id:string,bebidascalientes:IBebidasCalientesUpdate):Observable<IBebidasCalientesUpdate>{
      return this.http.post<IBebidasCalientesUpdate>(this.URL+'/'+id,bebidascalientes,this.httpOptions);
    }
}
