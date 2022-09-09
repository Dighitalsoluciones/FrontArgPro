import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './componentes/acerca-de/edit-acercade.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditencabezadoComponent } from './componentes/encabezado/editencabezado.component';
import { EditExperienciaComponent } from './componentes/experiencias/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeducacion', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'nuevoproyecto', component: NewproyectosComponent},
  {path: 'editaracercade/:id', component: EditAcercadeComponent},
  {path: 'editproyecto/:id', component: EditproyectosComponent},
  {path: 'editpersona/:id', component: EditencabezadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
