import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IGaseosas, IGaseosasUpdate } from '../interface/gaseosas';

@Injectable({
  providedIn: 'root'
})
export class GaseosasService {

  URL= 'http://localhost:8082/gaseosas'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }

    constructor(private http:HttpClient) { }
    getBebidasGaseosas():Observable<IGaseosas[]>{
      return this.http.get<IGaseosas[]>(this.URL);
    }
    getGaseosa(id:string):Observable<IGaseosas>{
      return this.http.get<IGaseosas>(this.URL+'/'+id);
    }
    addBebidasGaseosas(bebidasgaseosas:IGaseosasUpdate):Observable<IGaseosas>{
      return this.http.post<IGaseosas>(this.URL,bebidasgaseosas,this.httpOptions);
    }
    updateBebidasGaseosas(id:string,bebidasgaseosas:IGaseosasUpdate):Observable<IGaseosasUpdate>{
      return this.http.post<IGaseosasUpdate>(this.URL+'/'+id,bebidasgaseosas,this.httpOptions);
    }
}
