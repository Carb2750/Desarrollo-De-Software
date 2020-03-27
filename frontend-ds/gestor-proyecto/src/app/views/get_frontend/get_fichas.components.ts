import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
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

    constructor(public service:AppService) {
        this.listado_fichas = [];
    }

    public id;
    

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

    pass_code(id) {
        this.id = id;
    }

    isShown: boolean = false ; // hidden by default


    toggleShow() {

    this.isShown = ! this.isShown;

    }
}