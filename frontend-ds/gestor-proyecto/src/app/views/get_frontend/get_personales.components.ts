import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_personales.components.html'
})

export class GetPersonalesComponent implements OnInit{
    public listado_personales:any[];
    public listado_codigo_convive: any[];
    public listado_codigo_sociales: any[];
    public listado_codigo_amistosa: any[];
    public listado_codigo_amigos: any[];
    public listado_codigo_deportes: any[];
    public listado_codigo_artes: any[];
    public listado_codigo_problemas: any[];

    constructor(public service:AppService) {
        this.listado_personales = [];
    }

    public id;
    

    public personal = {
        codigo_convive:"",
        obs_residencias:"",
        cod_relaciones_sociales:"",
        cod_relaciones_amistosas:"",
        obs_relaciones_amistosas:"",
        obs_noviazgos:"",
        cod_mejor_amigo:"",
        obs_mejor_amigo:"",
        cod_act_deportiva:"",
        obs_actividades_deportivas:"",
        cod_act_artistica:"",
        obs_actividades_artisticas:"",
        obs_religion:"",
        cod_problema_emocional:"",
        obs_ayudas:""
    }

    ngOnInit(){
        this.get_personales();
        this.get_codigos_convive();
        this.get_codigos_sociales();
        this.get_codigos_amistosa();
        this.get_codigos_amigos();
        this.get_codigos_deportes();
        this.get_codigos_artes();
        this.get_codigos_problemas();
    }

    get_personales() {
        var response;
        this.service.get_personales().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_personales = response;
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

    get_codigos_convive() {
        var response;
        this.service.get_convive().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_convive = [];
            },
            () => {
                this.listado_codigo_convive = response;
                console.log(response);
            }
        )
    }


    get_codigos_sociales() {
        var response;
        this.service.get_relacionsocial().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_sociales = [];
            },
            () => {
                this.listado_codigo_sociales = response;
                console.log(response);
            }
        )
    }

    get_codigos_amistosa() {
        var response;
        this.service.get_relacionamistosa().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_amistosa = [];
            },
            () => {
                this.listado_codigo_amistosa = response;
                console.log(response);
            }
        )
    }

    get_codigos_amigos() {
        var response;
        this.service.get_amigos().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_amigos = [];
            },
            () => {
                this.listado_codigo_amigos = response;
                console.log(response);
            }
        )
    }

    get_codigos_deportes() {
        var response;
        this.service.get_deportes().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_deportes = [];
            },
            () => {
                this.listado_codigo_deportes = response;
                console.log(response);
            }
        )
    }

    get_codigos_artes() {
        var response;
        this.service.get_artes().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_artes = [];
            },
            () => {
                this.listado_codigo_artes = response;
                console.log(response);
            }
        )
    }

    get_codigos_problemas() {
        var response;
        this.service.get_emocionales().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_problemas = [];
            },
            () => {
                this.listado_codigo_problemas = response;
                console.log(response);
            }
        )
    }

    insert_personal(){
        var response;
        this.service.insert_personales(this.personal).subscribe(
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
            this.personal = {
                    codigo_convive:"",
                    obs_residencias:"",
                    cod_relaciones_sociales:"",
                    cod_relaciones_amistosas:"",
                    obs_relaciones_amistosas:"",
                    obs_noviazgos:"",
                    cod_mejor_amigo:"",
                    obs_mejor_amigo:"",
                    cod_act_deportiva:"",
                    obs_actividades_deportivas:"",
                    cod_act_artistica:"",
                    obs_actividades_artisticas:"",
                    obs_religion:"",
                    cod_problema_emocional:"",
                    obs_ayudas:""
                }
                swal.fire({
                    title: 'Registro creado exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                
        this.get_personales();
        }
        );
    }

    delete_personal(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        cod_aspectos_personal:id
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
                this.service.delete_personales(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_personales();
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




    update_personal(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_aspectos_personal:this.id
        };
        this.service.update_personales(load, this.personal).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.personal={
                codigo_convive:"",
                obs_residencias:"",
                cod_relaciones_sociales:"",
                cod_relaciones_amistosas:"",
                obs_relaciones_amistosas:"",
                obs_noviazgos:"",
                cod_mejor_amigo:"",
                obs_mejor_amigo:"",
                cod_act_deportiva:"",
                obs_actividades_deportivas:"",
                cod_act_artistica:"",
                obs_actividades_artisticas:"",
                obs_religion:"",
                cod_problema_emocional:"",
                obs_ayudas:""
            };
            swal.fire({
                title: 'Registro actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_personales();
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