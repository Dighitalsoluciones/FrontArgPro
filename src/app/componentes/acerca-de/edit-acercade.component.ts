import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/service/acercade.service';
1
@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  acercade: Acercade = null;

  constructor(private acercadeS: AcercadeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercadeS.details(id).subscribe(
      data =>{
        this.acercade = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

    
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercadeS.update(id, this.acercade).subscribe(
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


