import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILicores,ILicoresUpdate } from '../interface/licores';

@Injectable({
  providedIn: 'root'
})
export class LicoresService {


  URL= 'http://localhost:8082/Licores'
  httpOptions={
    headers:{
      'Content-Type':'application/json'}
    }

    constructor(private http:HttpClient) { }
    getBebidasLicores():Observable<ILicores[]>{
      return this.http.get<ILicores[]>(this.URL);
    }
    getBebidaLicor(id:string):Observable<ILicores>{
      return this.http.get<ILicores>(this.URL+'/'+id);
    }
    addBebidasLicores(bebidaslicores:ILicoresUpdate):Observable<ILicores>{
      return this.http.post<ILicores>(this.URL,bebidaslicores,this.httpOptions);
    }
    updateBebidaLicores(id:string,bebidaslicores:ILicoresUpdate):Observable<ILicoresUpdate>{
      return this.http.post<ILicoresUpdate>(this.URL+'/'+id,bebidaslicores,this.httpOptions);
    }
}
