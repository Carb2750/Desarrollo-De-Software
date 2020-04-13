import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_frontend.components.html'
})

export class GetFrontendComponent implements OnInit{
    public listado_info:any[];

    constructor(public service:AppService, private router:Router) {
        this.listado_info = [];
    }

    public id;
    public nombre;
    public apellido;
    public usuario1;
    public pass;
    public correo;
    

    public usuario = {
        nombre:"",
        apellido:"",
        usuario:"",
        pass:"",
        correo:"",
    
    }

    public usuario2 = {
        nombre:"",
        apellido:"",
        usuario:"",
        pass:"",
        correo:"",    
    }

    ngOnInit(){
        this.get_usuarios();
    }

    get_usuarios() {
        var response;
        this.service.get_usuarios().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_info = response;
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

    insert_usuario(){
        var response;
        this.service.insert_usuario(this.usuario).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.usuario={
                nombre:"",
                apellido:"",
                usuario:"",
                pass:"",
                correo: ""
            }
            swal.fire({
                title: 'Usuario agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_usuarios();
        }
        );
    }

    delete_usuario(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        codigo:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_usuario(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_usuarios();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El usuario a sido borrado.',
                'success'
              )
            }
          })
        
    }


    decision(){
        if(this.usuario.pass==""){
            this.update_usuario2();
        }else{
            this.update_usuario();
        }
    }


    update_usuario(){

        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo:this.id
        };
        this.usuario2=this.usuario;
        if(this.usuario2.nombre==""){
            this.usuario2.nombre=this.nombre;
        }
        if(this.usuario2.apellido==""){
            this.usuario2.apellido=this.apellido;
        }
        if(this.usuario2.usuario==""){
            this.usuario2.usuario=this.usuario1;
        }
        if(this.usuario2.pass==""){
            this.usuario2.pass=this.pass;
        }
        if(this.usuario2.correo==""){
            this.usuario2.correo=this.correo;
        }


        this.service.update_usuario(load, this.usuario2).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.usuario={
                nombre:"",
                apellido:"",
                usuario:"",
                pass:"",
                correo: ""
            };
            swal.fire({
                title: 'Usuario actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_usuarios();
        }
        );
        
    }

    update_usuario2(){

        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo:this.id
        };
        this.usuario2=this.usuario;
        if(this.usuario2.nombre==""){
            this.usuario2.nombre=this.nombre;
        }
        if(this.usuario2.apellido==""){
            this.usuario2.apellido=this.apellido;
        }
        if(this.usuario2.usuario==""){
            this.usuario2.usuario=this.usuario1;
        }
        if(this.usuario2.pass==""){
            this.usuario2.pass=this.pass;
        }
        if(this.usuario2.correo==""){
            this.usuario2.correo=this.correo;
        }


        this.service.update_usuario2(load, this.usuario2).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.usuario={
                nombre:"",
                apellido:"",
                usuario:"",
                pass:"",
                correo: ""
            };
            swal.fire({
                title: 'Usuario actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_usuarios();
        }
        );
        
    }

    pass_code(id,nombre,apellido,usuario,pass,correo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario1 = usuario;
        this.pass = pass;
        this.correo = correo;
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