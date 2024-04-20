import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBebidasHeladas,IBebidasHeladasUpdate } from '../interface/bebidasheladas';

@Injectable({
  providedIn: 'root'
})
export class BebidasHeladasService {

  URL= 'http://localhost:8082/BebidasHeladas'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }


    constructor(private http:HttpClient) { }
    getBebidasHeladas():Observable<IBebidasHeladas[]>{
      return this.http.get<IBebidasHeladas[]>(this.URL);
    }
    getBebidaHelada(id:string):Observable<IBebidasHeladas>{
      return this.http.get<IBebidasHeladas>(this.URL+'/'+id);
    }
    addBebidasHeladas(bebidasheladas:IBebidasHeladasUpdate):Observable<IBebidasHeladasUpdate>{
      return this.http.post<IBebidasHeladasUpdate>(this.URL,bebidasheladas,this.httpOptions);
    }
    updateBebidasHeladas(id:string,bebidasheladas:IBebidasHeladasUpdate):Observable<IBebidasHeladasUpdate>{
      return this.http.post<IBebidasHeladasUpdate>(this.URL+'/'+id,bebidasheladas,this.httpOptions);
    }
}
