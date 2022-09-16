import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';
  logoExp: string = '';
  desdeExp: string = '';
  hastaExp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreExp, this.descripcionExp, this.logoExp, this.desdeExp, this.hastaExp);
    this.sExperiencia.save(expe).subscribe(
      data=>{alert("✅ Experiencia creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("⛔ Fallo en la creación ⛔");
      this.router.navigate([''])
    }
    )
  }

  cancelar(): void {
    this.router.navigate(['']);
  }

}
