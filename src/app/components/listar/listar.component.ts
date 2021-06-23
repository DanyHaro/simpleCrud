import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Persona } from '../../Models/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listPersons:Persona[];
  updateperson:Persona=new Persona();
  constructor(private listarservice:MyserviceService,private listarroute:Router) {
    
  }

  ngOnInit() {
    this.listarservice.getPerson().subscribe(datos=>{
      console.log(datos);
      this.listPersons=datos;
    })
  }

  delete(persona:Persona){
    this.listarservice.deletePerson(persona).subscribe(datos=>{
      //el metodo devuelve 1 si se elimino correctamente
      //datos viene a ser lo que regresa el metodo.
      this.ngOnInit();
    });
  }
  update(persona:Persona){
    this.listarservice.getOnlyPerson(persona.id).subscribe(datos=>{
      this.updateperson=datos;
      
      //el metodo el Objecto seleccionado y los almacena en datos.
      //datos viene a ser lo que regresa el metodo.
    })
  }

  saveChanges() {
    this.listarservice.updatePerson(this.updateperson).subscribe(datos => {
      console.log(datos);
      this.ngOnInit();
      //El metodo devuelve 1 si se registró correctamente
      //datos viene a ser lo que regresa el metodo.
      alert("Registrado actualizado !");
    });
  }

}
