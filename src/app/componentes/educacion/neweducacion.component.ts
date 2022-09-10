import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  logo: string;
  titulo: string;
  centroeduc: string;
  desde: string;
  hasta: string;
  ubicacion: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.logo, this.titulo, this.centroeduc, this.desde, this.hasta, this.ubicacion);
    this.educacionS.save(educacion).subscribe(
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
