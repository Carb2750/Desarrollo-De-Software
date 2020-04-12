import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_fichadocumentos.html'
})

export class GetFichaDocumentoComponent implements OnInit{
    public listado_detallesficha:any[];
    public listado_codigo_alumnos: any[];
    public listado_codigo_documentos: any[];

    constructor(public service:AppService, private router:Router) {
        this.listado_detallesficha = [];
    }


     

    public id;

    public fichadocumento = {
        num_ficha:"",
        tipo_documento:""
    }

    public fichadocumento2 = {
        num_ficha:"",
        tipo_documento:""
    }
    public fichadocumento4 = {
        num_ficha:"",
        tipo_documento:""
    }
    public fichadocumento5 = {
        num_ficha:"",
        tipo_documento:""
    }
    public fichadocumento6 = {
        num_ficha:"",
        tipo_documento:""
    }
    public fichadocumento7 = {
        num_ficha:"",
        tipo_documento:""
    }
    public fichadocumento8 = {
        num_ficha:"",
        tipo_documento:""
    }


    revisar31(){
        var element = <HTMLInputElement> document.getElementById("cv");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar32(){
        var element = <HTMLInputElement> document.getElementById("tit");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }


    revisar34(){
        var element = <HTMLInputElement> document.getElementById("diplo");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar35(){
        var element = <HTMLInputElement> document.getElementById("part");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar36(){
        var element = <HTMLInputElement> document.getElementById("pasp");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar37(){
        var element = <HTMLInputElement> document.getElementById("cali");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar38(){
        var element = <HTMLInputElement> document.getElementById("idpad");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    ngOnInit(){
        this.get_fichadocumentoes();
        this.get_codigos_documentos();
        this.get_codigos_alumnos();
    }


    get_codigos_alumnos() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_alumnos = [];
            },
            () => {
                this.listado_codigo_alumnos = response;
                console.log(response);
            }
        )
    }

    

    get_codigos_documentos() {
        var response;
        this.service.get_documentos().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_documentos = [];
            },
            () => {
                this.listado_codigo_documentos = response;
                console.log(response);
            }
        )
    }

    get_fichadocumentoes() {
        var response;
        this.service.get_fichadocumentos().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_detallesficha = response;
                console.log(response);
            }
        )
    }


    insert_fichadocumento(){
        var response;
        if(this.fichadocumento.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
            );
        }
        
    }


    insert_fichadocumento2(){
        var response;
        this.fichadocumento2 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento2.tipo_documento
        }
        if(this.fichadocumento2.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento2).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento2={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
            );
        }
        
    }



    insert_fichadocumento4(){
        var response;
        this.fichadocumento4 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento4.tipo_documento
        }
        if(this.fichadocumento4.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento4).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento4={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
            );
        }
        
    }

    insert_fichadocumento5(){
        var response;
        this.fichadocumento5 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento5.tipo_documento
        }
        if(this.fichadocumento5.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento5).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento5={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
            );
        }
        
    }

    insert_fichadocumento6(){
        var response;
        this.fichadocumento6 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento6.tipo_documento
        }
        if(this.fichadocumento6.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento6).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento6={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
            );
        }
        
    }

    insert_fichadocumento7(){
        var response;
        this.fichadocumento7 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento7.tipo_documento
        }
        if(this.fichadocumento7.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento7).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento7={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
            );
        }
        
    }

    insert_fichadocumento8(){
        var response;
        this.fichadocumento8 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento8.tipo_documento
        }
        if(this.fichadocumento8.tipo_documento==null){   
        }else{
            this.service.insert_fichadocumentos(this.fichadocumento8).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.fichadocumento8={
                        num_ficha:"",
                        tipo_documento:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_fichadocumentoes();
                }
                );
        }
        
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
                this.service.delete_fichadocumentos(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_fichadocumentoes();
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




    update_fichadocumento(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_detalles:this.id
        };
        
        console.log(load);
        this.service.update_fichadocumentos(load, this.fichadocumento).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.fichadocumento = {
                num_ficha:"",
                tipo_documento:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_fichadocumentoes();
        }
        );
        
    }

    pass_code(id) {
        this.id = id;
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