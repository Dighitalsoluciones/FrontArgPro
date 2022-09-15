import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrainicialComponent } from './componentes/barrainicial/barrainicial.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { EditAcercadeComponent } from './componentes/acerca-de/edit-acercade.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { EditencabezadoComponent } from './componentes/encabezado/editencabezado.component';
import { EditskillsComponent } from './componentes/skills/editskills.component';
import { EditskillsbComponent } from './componentes/skills/editskillsb.component';
import { DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    BarrainicialComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    EducacionComponent,
    ExperienciasComponent,
    SkillsComponent,
    ProyectosComponent,
    PiedepaginaComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditEducacionComponent,
    NewproyectosComponent,
    EditAcercadeComponent,
    EditproyectosComponent,
    EditencabezadoComponent,
    EditskillsComponent,
    EditskillsbComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule

        
   ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
