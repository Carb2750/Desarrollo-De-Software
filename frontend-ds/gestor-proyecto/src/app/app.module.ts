import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import {AppService} from './app.service'

import { GetFrontendComponent } from './views/get_frontend/get_frontend.components';
import { GetFichaComponent } from './views/get_frontend/get_ficha.components';
import { GetRegistroComponent } from './views/get_frontend/get_registro.components';
import { GetCiudadComponent } from './views/get_frontend/get_ciudad.components';
import { GetDeporteComponent } from './views/get_frontend/get_deportes.components';
import { GetArteComponent } from './views/get_frontend/get_artes.components';
import { GetCursoComponent } from './views/get_frontend/get_cursos.components';
import { GetJornadaComponent } from './views/get_frontend/get_jornadas.components';
import { GetAmigoComponent } from './views/get_frontend/get_amigos.components';
import { GetSeccionComponent } from './views/get_frontend/get_secciones.components';
import { GetDificultadComponent } from './views/get_frontend/get_dificultad.components';
import { GetFacilidadComponent } from './views/get_frontend/get_facilidad.components';
import { GetConsideracionComponent } from './views/get_frontend/get_consideracion.components';
import { GetEstudioComponent } from './views/get_frontend/get_estudio.components';
import { GetDocumentoComponent } from './views/get_frontend/get_documentos.components';
import { GetModalidadComponent } from './views/get_frontend/get_modalidad.components';
import { GetEmocionalComponent } from './views/get_frontend/get_emocional.components';
//import { GetFichaDocumentoComponent } from './views/get_frontend/get_fichadocumentos.components';
import { GetRelacionAmistosaComponent } from './views/get_frontend/get_relacionamistosa.components';
import { GetRelacionSocialComponent } from './views/get_frontend/get_relacionsocial.components';
import { GetRendimientoComponent } from './views/get_frontend/get_rendimiento.components';
import { GetTipoEscuelaComponent } from './views/get_frontend/get_tipoescuela.components';
import { GetTranstornosComponent } from './views/get_frontend/get_transtornos.components';
import { GetPedagogicosComponent } from './views/get_frontend/get_pedagogicos.components';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GetFrontendComponent,
    GetFichaComponent,
    GetRegistroComponent,
    GetCiudadComponent,
    GetDeporteComponent,
    GetArteComponent,
    GetCursoComponent,
    GetJornadaComponent,
    GetAmigoComponent,
    GetSeccionComponent,
    GetDificultadComponent,
    GetFacilidadComponent,
    GetConsideracionComponent,
    GetEstudioComponent,
    GetDocumentoComponent,
    GetModalidadComponent,
    GetEmocionalComponent,
    //GetFichaDocumentoComponent
    GetRelacionAmistosaComponent,
    GetRelacionSocialComponent,
    GetRendimientoComponent,
    GetTipoEscuelaComponent,
    GetTranstornosComponent,
    GetPedagogicosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
