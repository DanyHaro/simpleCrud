import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private methodhttp:HttpClient) {

  }
  Url1='http://localhost:1212/persona/';
  getPerson(){
    return this.methodhttp.get<Persona[]>(this.Url1);
  }
  
  postPerson(pers:Persona){
    console.log(pers);
    return this.methodhttp.post<Persona>(this.Url1 + "add" ,pers);
  }
  
  deletePerson(pers:Persona){
    console.log(pers);
    return this.methodhttp.delete<Persona>(this.Url1+pers.id);
  }

  getOnlyPerson(id:number){
    return this.methodhttp.get<Persona>(this.Url1 + id);
  }

  updatePerson(pers:Persona){
    return this.methodhttp.put<Persona>(this.Url1 + pers.id,pers);
  }
}
