import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { isNull } from 'util';
import * as moment from 'moment';

@Component({
    selector: 'get_frontend',
    templateUrl: './seguimientos.html'
})

export class GetSeguimientosComponent implements OnInit{
    public listado_seguimientos:any[];
    public listado_alumnos: any[];
    public listado_usuarios: any[];
    public fecha=[];

    constructor(public service:AppService, private router:Router) {
        this.listado_seguimientos = [];
    }


     

    public id: number;
    public codigo_expediente:"";
    public codigo_usuario:"";
    public motivo:"";

    public seguimiento = {
        codigo_usuario:"",
        codigo_expediente:"",
        motivo_sesion:""
    }
    public seguimiento2 = {
        codigo_usuario:"",
        codigo_expediente:"",
        motivo_sesion:""
    }

    

    ngOnInit(){
        this.get_seguimientos();
        this.get_codigos_usuarios();
        this.get_codigos_alumnos();
        console.log(this.service.get_session());
        console.log(this.service.get_usuariologueado());
    }


    get_codigos_alumnos() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                this.listado_alumnos = [];
            },
            () => {
                this.listado_alumnos = response;
            }
        )
    }

    

    get_codigos_usuarios() {
        var response;
        this.service.get_usuarios().subscribe(
            data => response = data,
            err => {
                this.listado_usuarios = [];
            },
            () => {
                this.listado_usuarios = response;
            }
        )
    }

    get_seguimientos() {
        var response;
        this.service.get_seguimiento().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                console.log(response);
                for(var x = 0; x<response.length; x++){
                    const stringValue = response[x].fecha_sesion;
                    let date = moment.utc(stringValue).local();
                    this.fecha[x]=date.format('YYYY-MM-DD');
                    response[x].fecha_sesion=this.fecha[x];
                }
                this.listado_seguimientos = response;
                
            }
        )
    }


    insert_seguimiento(){
        var response;
        this.service.insert_seguimiento(this.seguimiento).subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            ()=> {
                this.seguimiento={
                    codigo_usuario:"",
                    codigo_expediente:"",
                    motivo_sesion:""
                }
                swal.fire({
                    title: 'Datos guardados exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            this.get_seguimientos();
            }
        ); 
        
    }




    delete_seguimiento(id){
        var response;
        var load={
            codigo_sesion:id
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
                this.service.delete_seguimiento(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_seguimientos();
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




    update_seguimiento(){
        var response;
        var load={
            codigo_sesion:this.id
        };
        this.seguimiento2=this.seguimiento;
        if(this.seguimiento2.codigo_expediente==""){
            this.seguimiento2.codigo_expediente=this.codigo_expediente;
        }
        if(this.seguimiento2.motivo_sesion==""){
            this.seguimiento2.motivo_sesion=this.motivo;
        }
        if(this.seguimiento2.codigo_usuario==""){
            this.seguimiento2.codigo_usuario=this.codigo_usuario;
        }
        this.service.update_seguimiento(load, this.seguimiento2).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.seguimiento = {
                codigo_usuario:"",
                codigo_expediente:"",
                motivo_sesion:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_seguimientos();
        }
        );
        
    }

    pass_code(id,motivo,codigo_usuario,codigo_expediente) {
        this.id = id;
        this.motivo = motivo;
        this.codigo_usuario = codigo_usuario;
        this.codigo_expediente = codigo_expediente;
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