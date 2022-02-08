import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui iria un empleado!</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre= "Juan";
  apellido= "Diaz";
  edad= 18;
  
  //empresa= "Pildoras Informaticas"
 
  constructor() { }

  ngOnInit(): void {
  }
  /*getEdad(){
    return this.edad;
  }*/
  /*llamaEmpresa(value:string){

  }*/

}
