import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editskillsb',
  templateUrl: './editskillsb.component.html',
  styleUrls: ['./editskillsb.component.css']
})
export class EditskillsbComponent implements OnInit {
  skills: Skills = null;

  constructor(private skillsS: SkillsService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsS.details(id).subscribe(
      data =>{
        this.skills = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsS.update(id, this.skills).subscribe(
      data=> {alert("✅ Modificado correctamente")
      this.router.navigate(['']);
      }, err => {alert("⛔ Error al modificar ⛔")
      this.router.navigate(['']);
      }
    )
  }
  cancelar(): void {
    this.router.navigate(['']);
  }

}
