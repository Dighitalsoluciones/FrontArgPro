import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
1
@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private proyectoS: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.details(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.update(id, this.proyectos).subscribe(
      data=> {alert("Modificado correctamente")
      this.router.navigate(['']);
      }, err => {alert("Error al modificar")
      this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigate(['']);
  }


}
