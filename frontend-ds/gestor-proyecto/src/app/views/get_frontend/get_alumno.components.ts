import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
    selector: 'demo',
    template:`
        <h2>Hi, demo1 !!</h2>
    `
})
export class RedBullet{
    static codigo_expediente:number = 0;
    get codigo_expediente(): number { return RedBullet.codigo_expediente; }
    set codigo_expediente(val: number) { RedBullet.codigo_expediente = val; }

}
@Component({
    selector: 'get_frontend',
    templateUrl: './get_alumno.components.html'
})
export class GetAlumnosComponent implements OnInit{
    public listado_alumno:any[];

    constructor(public service:AppService, public datepipe: DatePipe, private router:Router) {
        this.listado_alumno = [];
        this.fecha_nacimiento1 = [];
        this.codigo_expedient1 = [];
    }
    public fecha_nacimiento1=[];
    public codigo_expedient1=[];
    public id;
    public nombre_alumno;
    public segundo_nombre;
    public apellido_alumno;
    public segundo_apellido;
    public codigo_expediente;
    public fecha_nacimiento;
    public sexo;
    public nacionalidad;
    public lugar_procedencia;
    public residencial_actual_alumno;
    public residencia_actual;
    public nombre_padre;
    public tel_padre;
    public ocupacion_padre;
    public nombre_madre;
    public tel_madre;
    public ocupacion_madre;
    public aspectos_pedagogicos;
    public cod_aspectos_personal;
    public tel_celular;
    public tel_casa;
    public tel_trabajo;
    public correo;
    public codigo_ficha;

    public alumno = {
        id_alumno:"",
        nombre_alumno:"",
        segundo_nombre:"",
        apellido_alumno:"",
        segundo_apellido:"",
        codigo_expediente:Number(),
        fecha_nacimiento:"",
        sexo:"",
        nacionalidad:"",
        lugar_procedencia:"",
        residencial_actual_alumno:"",
        residencia_actual:"",
        nombre_padre:"",
        tel_padre:"",
        ocupacion_padre:"",
        nombre_madre:"",
        tel_madre:"",
        ocupacion_madre:"",
        aspectos_pedagogicos:"",
        cod_aspectos_personal:"",
        tel_celular:"",
        tel_casa:"",
        tel_trabajo:"",
        correo:"",
        codigo_ficha:""
    }

    public alumno2 = {
        id_alumno:"",
        nombre_alumno:"",
        segundo_nombre:"",
        apellido_alumno:"",
        segundo_apellido:"",
        codigo_expediente:Number(),
        fecha_nacimiento:"",
        sexo:"",
        nacionalidad:"",
        lugar_procedencia:"",
        residencial_actual_alumno:"",
        residencia_actual:"",
        nombre_padre:"",
        tel_padre:"",
        ocupacion_padre:"",
        nombre_madre:"",
        tel_madre:"",
        ocupacion_madre:"",
        aspectos_pedagogicos:"",
        cod_aspectos_personal:"",
        tel_celular:"",
        tel_casa:"",
        tel_trabajo:"",
        correo:"",
        codigo_ficha:""
    }

    ngOnInit(){
        this.get_alumno();
    }

    get_alumno() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                for(var x = 0; x<response.length; x++){
                    const stringValue = response[x].fecha_nacimiento;
                    let date = moment.utc(stringValue).local();
                    this.fecha_nacimiento1[x]=date.format('YYYY-MM-DD');
                    response[x].fecha_nacimiento=this.fecha_nacimiento1[x];
                    const stringValue1 = response[x].fecha_expediente;
                    let date1 = moment.utc(stringValue1).local();
                    this.codigo_expedient1[x]=date1.format('YYYY-MM-DD  HH:mm:ss');
                    response[x].fecha_expediente=this.codigo_expedient1[x];
                }
                this.listado_alumno = response;
                
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

    insert_expediente(){
        var response;
        this.service.insert_expediente().subscribe(
        data => response = data,
        err => {
        },
        ()=> {
        }
        );
    }

    insert_alumno(){
        var response,response1;
        var expediente = new RedBullet();
        this.service.get_ultimoexpediente().subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            expediente.codigo_expediente=Number(response[0].codigo_expediente)+1;
            this.alumno.codigo_expediente=expediente.codigo_expediente;     
            this.service.insert_alumno(this.alumno).subscribe(
                data => response1 = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.alumno = {
                        id_alumno:"",
                        nombre_alumno:"",
                        segundo_nombre:"",
                        apellido_alumno:"",
                        segundo_apellido:"",
                        codigo_expediente:Number(),
                        fecha_nacimiento:"",
                        sexo:"",
                        nacionalidad:"",
                        lugar_procedencia:"",
                        residencial_actual_alumno:"",
                        residencia_actual:"",
                        nombre_padre:"",
                        tel_padre:"",
                        ocupacion_padre:"",
                        nombre_madre:"",
                        tel_madre:"",
                        ocupacion_madre:"",
                        aspectos_pedagogicos:"",
                        cod_aspectos_personal:"",
                        tel_celular:"",
                        tel_casa:"",
                        tel_trabajo:"",
                        correo:"",
                        codigo_ficha:""
                        }
                        swal.fire({
                            title: 'Registro creado exitosamente!',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                this.get_alumno();
                }
            );
        }
        );
    }


    delete_alumno(id,cod_aspectos_personal,aspectos_pedagogicos,codigo_ficha,codigo_expediente){
        console.log("Registro a borrar: " + id);
        var response, response1, response2, response3, response4, response5;
        var load={
            id_alumno:id
        }
        var load1 = {
            cod_aspectos_personal:cod_aspectos_personal
        }
        var load2 = {
            codigo_pedagogicos:aspectos_pedagogicos
        }
        var load3 = {
            num_ficha:codigo_ficha
        }
        var load4 = {
            codigo_expediente:codigo_expediente
        }
        console.log(load,load1,load2,load3,load4);
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
                this.service.delete_alumno(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.service.delete_alumnostranstornos2(load4).subscribe(
                            data => response4 = data,
                            err => {
                            },
                            ()=> {
                            }
                        );
                        this.service.delete_personales(load1).subscribe(
                            data => response1 = data,
                            err => {
                            },
                            ()=> {
                            }
                        );
                        this.service.delete_pedagogico(load2).subscribe(
                            data => response2 = data,
                            err => {
                            },
                            ()=> {
                            }
                        );
                        this.service.delete_fichadocumentos2(load3).subscribe(
                            data => response5 = data,
                            err => {
                            },
                            ()=> {
                            }
                        );
                        this.service.delete_ficha(load3).subscribe(
                            data => response3 = data,
                            err => {
                            },
                            ()=> {
                            }
                        );
                        this.service.delete_expediente(load4).subscribe(
                            data => response4 = data,
                            err => {
                            },
                            ()=> {
                            }
                        );
                        
                        
                        this.get_alumno();
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
    





 


    delete_fichadocumento(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_detalles:id
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


            }
          })
        
    }

    update_alumno(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            id_alumno:this.id
        };
        this.alumno2=this.alumno;
        if(this.alumno2.id_alumno==""){
            this.alumno2.id_alumno=this.id;
        }
        if(this.alumno2.nombre_alumno==""){
            this.alumno2.nombre_alumno=this.nombre_alumno;
        }
        if(this.alumno2.segundo_nombre==""){
            this.alumno2.segundo_nombre=this.segundo_nombre;
        }
        if(this.alumno2.apellido_alumno==""){
            this.alumno2.apellido_alumno=this.apellido_alumno;
        }
        if(this.alumno2.segundo_apellido==""){
            this.alumno2.segundo_apellido=this.segundo_apellido;
        }
        if(this.alumno2.codigo_expediente==0){
            this.alumno2.codigo_expediente=this.codigo_expediente;
        }
        if(this.alumno2.fecha_nacimiento==""){
            const stringValue = this.fecha_nacimiento;
            let date = moment.utc(stringValue).local();
            this.alumno2.fecha_nacimiento=date.format('YYYY-MM-DD');
        }
        if(this.alumno2.sexo==""){
            this.alumno2.sexo=this.sexo;
        }
        if(this.alumno2.lugar_procedencia==""){
            this.alumno2.lugar_procedencia=this.lugar_procedencia;
        }
        if(this.alumno2.residencia_actual==""){
            this.alumno2.residencia_actual=this.residencia_actual;
        }
        if(this.alumno2.residencial_actual_alumno==""){
            this.alumno2.residencial_actual_alumno=this.residencial_actual_alumno;
        }
        if(this.alumno2.nacionalidad==""){
            this.alumno2.nacionalidad=this.nacionalidad;
        }
        if(this.alumno2.nombre_padre==""){
            this.alumno2.nombre_padre=this.nombre_padre;
        }
        if(this.alumno2.ocupacion_padre==""){
            this.alumno2.ocupacion_padre=this.ocupacion_padre;
        }
        if(this.alumno2.tel_padre==""){
            this.alumno2.tel_padre=this.tel_padre;
        }
        if(this.alumno2.nombre_madre==""){
            this.alumno2.nombre_madre=this.nombre_madre;
        }
        if(this.alumno2.ocupacion_madre==""){
            this.alumno2.ocupacion_madre=this.ocupacion_madre;
        }
        if(this.alumno2.tel_madre==""){
            this.alumno2.tel_madre=this.tel_madre;
        }
        if(this.alumno2.aspectos_pedagogicos==""){
            this.alumno2.aspectos_pedagogicos=this.aspectos_pedagogicos;
        }
        if(this.alumno2.cod_aspectos_personal==""){
            this.alumno2.cod_aspectos_personal=this.cod_aspectos_personal;
        }
        if(this.alumno2.tel_casa==""){
            this.alumno2.tel_casa=this.tel_casa;
        }
        if(this.alumno2.tel_celular==""){
            this.alumno2.tel_celular=this.tel_celular;
        }
        if(this.alumno2.tel_trabajo==""){
            this.alumno2.tel_trabajo=this.tel_trabajo;
        }
        if(this.alumno2.correo==""){
            this.alumno2.correo=this.correo;
        }
        if(this.alumno2.codigo_ficha==""){
            this.alumno2.codigo_ficha=this.codigo_ficha;
        }
        this.service.update_alumno(load, this.alumno2).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.alumno={
                id_alumno:"",
                nombre_alumno:"",
                segundo_nombre:"",
                apellido_alumno:"",
                segundo_apellido:"",
                codigo_expediente:Number(),
                fecha_nacimiento:"",
                sexo:"",
                nacionalidad:"",
                lugar_procedencia:"",
                residencial_actual_alumno:"",
                residencia_actual:"",
                nombre_padre:"",
                tel_padre:"",
                ocupacion_padre:"",
                nombre_madre:"",
                tel_madre:"",
                ocupacion_madre:"",
                aspectos_pedagogicos:"",
                cod_aspectos_personal:"",
                tel_celular:"",
                tel_casa:"",
                tel_trabajo:"",
                correo:"",
                codigo_ficha:""
            };
            swal.fire({
                title: 'Registro actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_alumno();
        }
        );
        
    }

    pass_code(id, nombre_alumno, segundo_nombre, apellido_alumno, segundo_apellido, codigo_expediente, fecha_nacimiento, sexo, nacionalidad, lugar_procedencia, residencial_actual_alumno, residencia_actual, nombre_padre, tel_padre, ocupacion_padre, nombre_madre, tel_madre, ocupacion_madre, aspectos_pedagogicos, cod_aspectos_personal, tel_celular, tel_casa, tel_trabajo, correo, codigo_ficha) {
        this.id = id;
        this.nombre_alumno = nombre_alumno;
        this.segundo_nombre = segundo_nombre;
        this.apellido_alumno = apellido_alumno;
        this.segundo_apellido = segundo_apellido;
        this.codigo_expediente = codigo_expediente;
        this.fecha_nacimiento = fecha_nacimiento;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.lugar_procedencia = lugar_procedencia;
        this.residencial_actual_alumno = residencial_actual_alumno;
        this.residencia_actual = residencia_actual;
        this.nombre_padre = nombre_padre;
        this.tel_padre = tel_padre;
        this.ocupacion_padre = ocupacion_padre;
        this.nombre_madre = nombre_madre;
        this.tel_madre = tel_madre;
        this.ocupacion_madre = ocupacion_madre;
        this.aspectos_pedagogicos = aspectos_pedagogicos;
        this.cod_aspectos_personal = cod_aspectos_personal;
        this.tel_celular = tel_celular;
        this.tel_casa = tel_casa;
        this.tel_trabajo = tel_trabajo;
        this.correo = correo;
        this.codigo_ficha = codigo_ficha;
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
    aspectos_pedagogicoss(){
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