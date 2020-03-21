import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
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
const routes: Routes = [
    {
        path: 'listado_usuarios',
        component: GetFrontendComponent
    },
    {
        path: 'listado_ficha',
        component: GetFichaComponent
    },
    {
        path: 'registro',
        component: GetRegistroComponent
    },
    {
        path: 'ciudades',
        component: GetCiudadComponent
    },
    {
        path: 'deportes',
        component: GetDeporteComponent
    },
    {
        path: 'artes',
        component: GetArteComponent
    },
    {
        path: 'cursos',
        component: GetCursoComponent
    },
    {
        path: 'jornadas',
        component: GetJornadaComponent
    },
    {
        path: 'mejor_amigo',
        component: GetAmigoComponent
    },
    {
        path: 'secciones',
        component: GetSeccionComponent
    },
    {
        path: 'asignatura_dificultad',
        component: GetDificultadComponent
    },
    {
        path: 'asignatura_facilidad',
        component: GetFacilidadComponent
    },
    {
        path: 'consideracion',
        component: GetConsideracionComponent
    },
    {
        path: 'estudio_constante',
        component: GetEstudioComponent
    },
    {
        path: 'documentos',
        component: GetDocumentoComponent
    },
    {
        path: 'modalidades',
        component: GetModalidadComponent
    },
    {
        path: 'problemas_emocionales',
        component: GetEmocionalComponent
    }/*,
    {
        path: 'ficha_documentos',
        component: GetFichaDocumentoComponent
    }*/
    ,
    {
        path: 'relaciones_amistosas',
        component: GetRelacionAmistosaComponent
    },
    {
        path: 'relaciones_sociales',
        component: GetRelacionSocialComponent
    },
    {
        path: 'rendimiento_academico',
        component: GetRendimientoComponent
    },
    {
        path: 'tipo_escuela',
        component: GetTipoEscuelaComponent
    },
    {
        path: 'trastornos',
        component: GetTranstornosComponent
    },
    {
        path: 'aspectos_pedagogicos',
        component: GetPedagogicosComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{


}