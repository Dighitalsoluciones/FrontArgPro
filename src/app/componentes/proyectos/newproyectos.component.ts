import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
    logoProyec: string;
    referenciaProyec: string;
    descripcionProyec: string;
    fechacreacionProyec: string;
    linkProyec: string;

  constructor(private proyectosS: ProyectosService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.logoProyec, this.referenciaProyec, this.descripcionProyec, this.fechacreacionProyec, this.linkProyec);
    this.proyectosS.save(proyectos).subscribe(
      data =>{
        alert("Objeto agregado correctamente")
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo en la creación");
      this.router.navigate(['']);
    }
  )
 }

 cancelar(): void {
  this.router.navigate(['']);
}


}
