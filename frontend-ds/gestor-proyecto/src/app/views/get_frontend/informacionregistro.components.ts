import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { timer } from 'rxjs';
import * as moment from 'moment';
import * as html2pdf from 'html2pdf.js'

@Component({
    selector: 'demo4',
    template:`
        <h2>Hi, demo !!</h2>
    `
})

export class YellowBullet
{
    static codigo_expediente: number = 0;
    get codigo_expediente(): number { return YellowBullet.codigo_expediente; }
    set codigo_expediente(val: number) { YellowBullet.codigo_expediente = val; }
}

@Component({
    selector: 'get_frontend',
    templateUrl: './informacionregistro.components.html'
})
export class InformacionRegistroComponent implements OnInit{
    
    exportarpdf(){
        const option = {
            filename:'Hoja Registro.pdf',
            image: {type: 'png'},
            html2canvas:{},
            jsPDF:{orientation: 'landscape'}
        };
        const content: Element = document.getElementById('export');
        html2pdf()
            .from(content)
            .set(option)
            .save()
    }

    constructor(public service:AppService, private router:Router) {
        this.listado_alumno = [];
        this.listado_trastornos = [];
        this.listado_registro = [];
        this.listado_detalle = [];
        this.listado_detalle2 = [];
        this.fecha_expediente = [];
    }

    public listado_alumno:any[];
    public listado_trastornos:any[];
    public listado_registro:any[];
    public listado_detalle:any[];
    public listado_detalle2:any[];
    public fecha_expediente:any[];


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

    get_registro() {
        var response,response2;
        var registro = new YellowBullet();
        var load = {
            codigo_expediente:Number()
        };
        var contador = 0, contador2 = 0;
        this.service.get_registrocompleto(this.alumno).subscribe(
            data => response = data,
            err => {
                this.listado_registro = [];
            },
            () => {
                this.listado_registro = response;
                registro.codigo_expediente=response[0].codigo_expediente;
                load.codigo_expediente = registro.codigo_expediente;
                const stringValue = response[0].fecha_expediente;
                let date = moment.utc(stringValue).local();
                this.fecha_expediente[0]=date.format('YYYY-MM-DD');
                response[0].fecha_expediente=this.fecha_expediente[0];
                this.service.get_completealumnotrastornos(load).subscribe(
                    data => response2 = data,
                    err => {
                        this.listado_trastornos = [];
                        this.listado_detalle = [];
                        this.listado_detalle2 = [];
                        contador = 0;
                        contador2 = 0;
                    },
                    () => {
                        this.listado_trastornos = response2;
                        for(var x = 0; x<response2.length; x++){
                            if(response2[x].codigo_trans>22){
                                this.toggleShow3();
                                this.listado_detalle[contador]=response2[x];
                                contador++;
                            }else{
                                this.listado_detalle2[contador2]=response2[x];
                                this.isShown3 = false;
                                this.isShown4 = false;
                                contador2++;
                            }
                        }
                    }
                );
                contador = 0;
                contador2 = 0;
                this.listado_detalle = [];
                this.listado_detalle2 = [];
            }
        );
    }

    
    isShown: boolean = false ; // hidden by default
    isShown3: boolean = false; // hidden by default
    isShown4: boolean = false;
    toggleShow() {
        this.isShown = ! this.isShown;
        
    }
    toggleShow2(){
        this.isShown = ! this.isShown;
    }
    toggleShow3(){
        this.isShown3 = true;
        this.isShown4 = true;
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