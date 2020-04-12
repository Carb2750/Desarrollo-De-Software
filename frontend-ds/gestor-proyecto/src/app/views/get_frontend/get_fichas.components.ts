import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_fichas.components.html'
})

export class GetFichasComponent implements OnInit{
    public listado_fichas:any[];
    public listado_codigo_curso: any[];
    public listado_codigo_seccion: any[];
    public listado_codigo_modalidad: any[];
    public listado_codigo_jornada: any[];
    public listado_codigo_ciudad: any[];

    constructor(public service:AppService, private router:Router) {
        this.listado_fichas = [];
    }

    public id;
    
    public cod_curso;
    public cod_seccion;
    public cod_modalidad;
    public cod_jornada;
    public cod_ciudad;
    public anio;
    public obs_inst_proced;
    public indice_acad;
    public obs_repite_curso;
    public obs_materia_restrada;
    public obs_beca;
    public contacto_emergencia;
    public num_emergencia;
    public observaciones;
    public motivacion_ingreso;

    public ficha = {
        cod_curso:"",
        cod_seccion:"",
        cod_modalidad:"",
        cod_jornada:"",
        cod_ciudad:"",
        anio:"",
        obs_inst_proced:"",
        indice_acad:"",
        obs_repite_curso:"",
        obs_materia_restrada:"",
        obs_beca:"",
        contacto_emergencia:"",
        num_emergencia:"",
        observaciones:"",
        motivacion_ingreso:""
    }
    public ficha2 = {
        cod_curso:"",
        cod_seccion:"",
        cod_modalidad:"",
        cod_jornada:"",
        cod_ciudad:"",
        anio:"",
        obs_inst_proced:"",
        indice_acad:"",
        obs_repite_curso:"",
        obs_materia_restrada:"",
        obs_beca:"",
        contacto_emergencia:"",
        num_emergencia:"",
        observaciones:"",
        motivacion_ingreso:""
    }

    ngOnInit(){
        this.get_fichas();
        this.get_codigos_curso();
        this.get_codigos_seccion();
        this.get_codigos_modalidad();
        this.get_codigos_jornada();
        this.get_codigos_ciudad();
    }

    get_fichas() {
        var response;
        this.service.get_ficha().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_fichas = response;
                console.log(response);
            }
        )
    }

    errores(){
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algun campo requerido esta vacio!',
        })
    }

    get_codigos_curso() {
        var response;
        this.service.get_cursos().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_curso = [];
            },
            () => {
                this.listado_codigo_curso = response;
                console.log(response);
            }
        )
    }


    get_codigos_seccion() {
        var response;
        this.service.get_secciones().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_seccion = [];
            },
            () => {
                this.listado_codigo_seccion = response;
                console.log(response);
            }
        )
    }

    get_codigos_modalidad() {
        var response;
        this.service.get_modalidades().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_modalidad = [];
            },
            () => {
                this.listado_codigo_modalidad = response;
                console.log(response);
            }
        )
    }

    get_codigos_jornada() {
        var response;
        this.service.get_jornadas().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_jornada = [];
            },
            () => {
                this.listado_codigo_jornada = response;
                console.log(response);
            }
        )
    }

    get_codigos_ciudad() {
        var response;
        this.service.get_ciudades().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_ciudad = [];
            },
            () => {
                this.listado_codigo_ciudad = response;
                console.log(response);
            }
        )
    }

    insert_ficha(){
        var response;
        this.service.insert_ficha(this.ficha).subscribe(
        data => response = data,
        err => {
            console.log(response);
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.ficha = {
                    cod_curso:"",
                    cod_seccion:"",
                    cod_modalidad:"",
                    cod_jornada:"",
                    cod_ciudad:"",
                    anio:"",
                    obs_inst_proced:"",
                    indice_acad:"",
                    obs_repite_curso:"",
                    obs_materia_restrada:"",
                    obs_beca:"",
                    contacto_emergencia:"",
                    num_emergencia:"",
                    observaciones:"",
                    motivacion_ingreso:""
                }
                swal.fire({
                    title: 'Registro creado exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                
        this.get_fichas();
        }
        );
    }

    delete_ficha(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            num_ficha:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este registro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_ficha(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_fichas();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El registro a sido borrado.',
                'success'
              )
            }
          })
        
    }




    update_ficha(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            num_ficha:this.id
        };
        this.ficha2=this.ficha;
        if(this.ficha2.cod_curso==""){
            this.ficha2.cod_curso=this.cod_curso;
        }
        if(this.ficha2.cod_seccion==""){
            this.ficha2.cod_seccion=this.cod_seccion;
        }
        if(this.ficha2.cod_modalidad==""){
            this.ficha2.cod_modalidad=this.cod_modalidad;
        }
        if(this.ficha2.cod_jornada==""){
            this.ficha2.cod_jornada=this.cod_jornada;
        }
        if(this.ficha2.cod_ciudad==""){
            this.ficha2.cod_ciudad=this.cod_ciudad;
        }
        if(this.ficha2.anio==""){
            this.ficha2.anio=this.anio;
        }
        if(this.ficha2.obs_inst_proced==""){
            this.ficha2.obs_inst_proced=this.obs_inst_proced;
        }
        if(this.ficha2.indice_acad==""){
            this.ficha2.indice_acad=this.indice_acad;
        }
        if(this.ficha2.obs_repite_curso==""){
            this.ficha2.obs_repite_curso=this.obs_repite_curso;
        }
        if(this.ficha2.obs_materia_restrada==""){
            this.ficha2.obs_materia_restrada=this.obs_materia_restrada;
        }
        if(this.ficha2.obs_beca==""){
            this.ficha2.obs_beca=this.obs_beca;
        }
        if(this.ficha2.contacto_emergencia==""){
            this.ficha2.contacto_emergencia=this.contacto_emergencia;
        }
        if(this.ficha2.num_emergencia==""){
            this.ficha2.num_emergencia=this.num_emergencia;
        }
        if(this.ficha2.observaciones==""){
            this.ficha2.observaciones=this.observaciones;
        }
        if(this.ficha2.motivacion_ingreso==""){
            this.ficha2.motivacion_ingreso=this.motivacion_ingreso;
        }
        this.service.update_ficha(load, this.ficha).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.ficha={
                cod_curso:"",
                cod_seccion:"",
                cod_modalidad:"",
                cod_jornada:"",
                cod_ciudad:"",
                anio:"",
                obs_inst_proced:"",
                indice_acad:"",
                obs_repite_curso:"",
                obs_materia_restrada:"",
                obs_beca:"",
                contacto_emergencia:"",
                num_emergencia:"",
                observaciones:"",
                motivacion_ingreso:""
            };
            swal.fire({
                title: 'Registro actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_fichas();
        }
        );
        
    }

    pass_code(id,cod_curso,cod_seccion,cod_modalidad,cod_jornada,cod_ciudad,anio,obs_inst_proced,indice_acad,obs_repite_curso,obs_materia_restrada,obs_beca,contacto_emergencia,num_emergencia,observaciones,motivacion_ingreso) {
        this.id = id;
        this.cod_curso = cod_curso;
        this.cod_seccion = cod_seccion;
        this.cod_modalidad = cod_modalidad;
        this.cod_jornada = cod_jornada;
        this.cod_ciudad = cod_ciudad;
        this.anio = anio;
        this.obs_inst_proced = obs_inst_proced;
        this.indice_acad = indice_acad;
        this.obs_repite_curso = obs_repite_curso;
        this.obs_materia_restrada = obs_materia_restrada;
        this.obs_beca = obs_beca;
        this.contacto_emergencia = contacto_emergencia;
        this.num_emergencia = num_emergencia;
        this.observaciones = observaciones;
        this.motivacion_ingreso = motivacion_ingreso;
    }

    isShown: boolean = false ; // hidden by default


    toggleShow() {

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