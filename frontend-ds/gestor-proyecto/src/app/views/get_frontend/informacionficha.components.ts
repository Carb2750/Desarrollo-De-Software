import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { timer } from 'rxjs';
import * as moment from 'moment';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'demo3',
    template:`
        <h2>Hi, demo !!</h2>
    `
})

export class BlueBullet
{
    static num_ficha: number = 0;
    get num_ficha(): number { return BlueBullet.num_ficha; }
    set num_ficha(val: number) { BlueBullet.num_ficha = val; }
}

@Component({
    selector: 'get_frontend',
    templateUrl: './informacionficha.components.html'
})
export class InformacionFichaComponent implements OnInit{

    exportarpdf(){
        const option = {
            filename:'Ficha_Alumno_'+ this.alumno.id_alumno+'.pdf',
            html2canvas:{},
            jsPDF:{orientation: 'landscape'}
        };
        const content: Element = document.getElementById('export');
        html2pdf()
            .from(content)
            .set(option)
            .save()

            console.log(option.filename);
    }

    

    constructor(public service:AppService, private router:Router) {
        this.listado_alumno = [];
        this.listado_documentos = [];
        this.listado_registro = [];
        this.fecha_nacimiento1 = [];
    }

    public listado_alumno:any[];
    public listado_documentos:any[];
    public listado_registro:any[];
    public fecha_nacimiento1:any[];


    public alumno = {
        id_alumno:""
    }


    ngOnInit(){
        this.get_codigos_alumnos();
    }

    get_codigos_alumnos() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                this.listado_alumno = [];
            },
            () => {
                this.listado_alumno = response;
                
            }
        )
    }

    get_ficha() {
        var response,response2;
        var ficha = new BlueBullet();
        var load = {
            num_ficha:Number()
        };
        this.service.get_fichacompleta(this.alumno).subscribe(
            data => response = data,
            err => {
                this.listado_registro = [];
            },
            () => {
                this.listado_registro = response;
                ficha.num_ficha=response[0].num_ficha;
                load.num_ficha = ficha.num_ficha;
                const stringValue = response[0].fecha_nacimiento;
                let date = moment.utc(stringValue).local();
                this.fecha_nacimiento1[0]=date.format('YYYY-MM-DD');
                response[0].fecha_nacimiento=this.fecha_nacimiento1[0];
                this.service.get_completefichadoc(load).subscribe(
                    data => response2 = data,
                    err => {
                        this.listado_documentos = [];
                    },
                    () => {
                        this.listado_documentos = response2;
                    }
                );
            }
        );
    }

    
    isShown: boolean = false ; // hidden by default
    toggleShow() {
        this.isShown = ! this.isShown;
        
    }
    toggleShow2(){
        this.isShown = ! this.isShown;
    }
    alumnos(){
        this.router.navigateByUrl('/alumnos');
    }
    alumnos_trastornos(){
        this.router.navigateByUrl('/alumnos_trastornos');
    }
    artes(){
        this.router.navigateByUrl('/artes');
    }
    asignatura_dificultad(){
        this.router.navigateByUrl('/asignatura_dificultad');
    }
    asignatura_facilidad(){
        this.router.navigateByUrl('/asignatura_facilidad');
    }
    aspectos_pedagogicos(){
        this.router.navigateByUrl('/aspectos_pedagogicos');
    }
    aspectos_personales(){
        this.router.navigateByUrl('/aspectos_personales');
    }
    ciudades(){
        this.router.navigateByUrl('/ciudades');
    }
    consideracion(){
        this.router.navigateByUrl('/consideracion');
    }
    vive(){
        this.router.navigateByUrl('/vive');
    }
    cursos(){
        this.router.navigateByUrl('/cursos');
    }
    deportes(){
        this.router.navigateByUrl('/deportes');
    }
    documentos(){
        this.router.navigateByUrl('/documentos');
    }
    estudio_constante(){
        this.router.navigateByUrl('/estudio_constante');
    }
    fichas(){
        this.router.navigateByUrl('/fichas');
    }
    ficha_completa(){
        this.router.navigateByUrl('/ficha_completa');
    }
    ficha_documentos(){
        this.router.navigateByUrl('/ficha_documentos');
    }
    hoja_registro(){
        this.router.navigateByUrl('/hoja_registro');
    }
    jornadas(){
        this.router.navigateByUrl('/jornadas');
    }
    mejor_amigo(){
        this.router.navigateByUrl('/mejor_amigo');
    }
    menu(){
        this.router.navigateByUrl('/menu');
    }
    modalidades(){
        this.router.navigateByUrl('/modalidades');
    }
    registro(){
        this.router.navigateByUrl('/registro');
    }
    relaciones_amistosas(){
        this.router.navigateByUrl('/relaciones_amistosas');
    }
    relaciones_sociales(){
        this.router.navigateByUrl('/relaciones_sociales');
    }
    rendimiento_academico(){
        this.router.navigateByUrl('/rendimiento_academico');
    }
    problemas_emocionales(){
        this.router.navigateByUrl('/problemas_emocionales');
    }
    secciones(){
        this.router.navigateByUrl('/secciones');
    }
    seguimientos(){
        this.router.navigateByUrl('/seguimientos');
    }
    tipo_escuela(){
        this.router.navigateByUrl('/tipo_escuela');
    }
    trastornos(){
        this.router.navigateByUrl('/trastornos');
    }
    listado_usuarioss(){
        this.router.navigateByUrl('/listado_usuarios');
    }
    salir(){
        this.service.reset_session();
        this.router.navigateByUrl('/ingreso');
    }

}