import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {IVinos,IVinosUpdate} from '../interface/vinos';

@Injectable({
  providedIn: 'root'
})
export class VinosService {

  URL= 'http://localhost:8082/vinos'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }



    constructor(private http:HttpClient) { }
    getVinos():Observable<IVinos[]>{
      return this.http.get<IVinos[]>(this.URL);
    }
    getVino(id:string):Observable<IVinos>{
      return this.http.get<IVinos>(this.URL+'/'+id);
    }
    addVinos(vinos:IVinosUpdate):Observable<IVinos>{
      return this.http.post<IVinos>(this.URL,vinos,this.httpOptions);
    }
    updateVinos(id:string,vinos:IVinosUpdate):Observable<IVinosUpdate>{
      return this.http.post<IVinosUpdate>(this.URL+'/'+id,vinos,this.httpOptions);
    }
}
