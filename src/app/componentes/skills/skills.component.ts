import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills [] = [];

  constructor(private sSkills: SkillsService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }
  isLogged = false;
  

  ngOnInit(): void {
    this.traerSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    

  }
  traerSkills(): void {
    this.sSkills.lista().subscribe(
      data =>{
        this.skills = data;
      })
  }
  
 }
