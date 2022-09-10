import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editencabezado',
  templateUrl: './editencabezado.component.html',
  styleUrls: ['./editencabezado.component.css']
})
export class EditencabezadoComponent implements OnInit {
  persona: persona = new persona("","","","","");

  constructor(private personaS: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.details(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe(
      data=> {alert("Modificado correctamente")
      this.router.navigate(['']);
      }, err => {alert("Error al modificar")
      this.router.navigate(['']);
      }
    )
  }

}
