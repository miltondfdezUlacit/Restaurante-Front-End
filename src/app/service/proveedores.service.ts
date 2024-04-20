import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProveedores,IProveedoresUpdate } from '../interface/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  URL= 'http://localhost:8082/Proveedores'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }

  constructor(private http:HttpClient) { }
  getProveedores():Observable<IProveedores[]>{
    return this.http.get<IProveedores[]>(this.URL);
  }
  getVino(id:string):Observable<IProveedores>{
    return this.http.get<IProveedores>(this.URL+'/'+id);
  }
  addVinos(vinos:IProveedoresUpdate):Observable<IProveedores>{
    return this.http.post<IProveedores>(this.URL,vinos,this.httpOptions);
  }
  updateVinos(id:string,vinos:IProveedoresUpdate):Observable<IProveedoresUpdate>{
    return this.http.post<IProveedoresUpdate>(this.URL+'/'+id,vinos,this.httpOptions);
  }
}
