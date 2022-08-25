import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrainicial',
  templateUrl: './barrainicial.component.html',
  styleUrls: ['./barrainicial.component.css']
})
export class BarrainicialComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    this.router.navigate(['/login'])
  }
}
