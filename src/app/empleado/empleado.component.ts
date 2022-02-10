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
  habilitacionCuadro=false;
  usuRegistrado=false;
  textoDeRegistro="No hay nadie registrado";

  
  //empresa= "Pildoras Informaticas"
  setUsuarioRegistrado(){
    //alert("El Usuario se acaba de registrar");
    this.textoDeRegistro="El usuario se acaba de registrar";
  }
  


  
 
  constructor() { }

  ngOnInit(): void {
  }
  /*getEdad(){
    return this.edad;
  }*/
  /*llamaEmpresa(value:string){

  }*/

}
