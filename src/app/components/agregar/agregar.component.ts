import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Persona } from '../../Models/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  person: Persona = new Persona();

  constructor(private addservice: MyserviceService, private approute: Router) {

  }

  ngOnInit() {
  }
  save() {
    console.log(this.person);
    this.addservice.postPerson(this.person).subscribe(datos => {
      //El metodo devuelve 1 si se registró correctamente
      //datos viene a ser lo que regresa el metodo.
      alert("Registrado correctamente !");
      this.approute.navigate(["/listar"]);
    });
  }

}
