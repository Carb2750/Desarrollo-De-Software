import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_pedagogicos.components.html'
})

export class GetPedagogicosComponent implements OnInit{
    public listado_pedagogicos:any[];
    public listado_codigo: any[];
    public listado_rendimiento: any[];
    public listado_dificultad: any[];
    public listado_facilidad: any[];
    public listado_estudio: any[];
    public listado_consideracion: any[];

    constructor(public service:AppService) {
        this.listado_pedagogicos = [];
    }

    public id;
    
    public motivos;
    public sexto_grado_cursado;
    public ubicacion_centro_anterior;
    public codigo_escuela;
    public codigo_rendimiento;
    public cod_asignatura_dificultad;
    public cod_asignatura_facilidad;
    public codigo_estudio;
    public cod_consideracion;
    public obs_reportes;
    public obs_expulsion;
    public obs_reprobado;

    public pedagogico = {
        motivos:"",
        sexto_grado_cursado:"",
        ubicacion_centro_anterior:"",
        codigo_escuela:"",
        codigo_rendimiento:"",
        cod_asignatura_dificultad:"",
        cod_asignatura_facilidad:"",
        codigo_estudio:"",
        cod_consideracion:"",
        obs_reportes:"",
        obs_expulsion:"",
        obs_reprobado:""
    }

    public pedagogico2 = {
        motivos:"",
        sexto_grado_cursado:"",
        ubicacion_centro_anterior:"",
        codigo_escuela:"",
        codigo_rendimiento:"",
        cod_asignatura_dificultad:"",
        cod_asignatura_facilidad:"",
        codigo_estudio:"",
        cod_consideracion:"",
        obs_reportes:"",
        obs_expulsion:"",
        obs_reprobado:""
    }

    ngOnInit(){
        this.get_pedagogicos();
        this.get_codigos();
        this.get_rendimiento();
        this.get_dificultad();
        this.get_facilidad();
        this.get_estudio();
        this.get_consideracion();
    }

    get_pedagogicos() {
        var response;
        this.service.get_pedagogicos().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_pedagogicos = response;
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

    get_codigos() {
        var response;
        this.service.get_tipoescuela().subscribe(
            data => response = data,
            err => {
                this.listado_codigo = [];
            },
            () => {
                this.listado_codigo = response;
                console.log(response);
            }
        )
    }

    get_rendimiento() {
        var response;
        this.service.get_rendimientoacademico().subscribe(
            data => response = data,
            err => {
                this.listado_rendimiento = [];
            },
            () => {
                this.listado_rendimiento = response;
                console.log(response);
            }
        )
    }

    get_dificultad() {
        var response;
        this.service.get_dificultades().subscribe(
            data => response = data,
            err => {
                this.listado_dificultad = [];
            },
            () => {
                this.listado_dificultad = response;
                console.log(response);
            }
        )
    }

    get_facilidad() {
        var response;
        this.service.get_facilidades().subscribe(
            data => response = data,
            err => {
                this.listado_facilidad = [];
            },
            () => {
                this.listado_facilidad = response;
                console.log(response);
            }
        )
    }

    get_estudio() {
        var response;
        this.service.get_estudios().subscribe(
            data => response = data,
            err => {
                this.listado_estudio = [];
            },
            () => {
                this.listado_estudio = response;
                console.log(response);
            }
        )
    }

    get_consideracion() {
        var response;
        this.service.get_consideraciones().subscribe(
            data => response = data,
            err => {
                this.listado_consideracion = [];
            },
            () => {
                this.listado_consideracion = response;
                console.log(response);
            }
        )
    }

    insert_pedagogico(){
        var response;
        this.service.insert_pedagogico(this.pedagogico).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
                })
        },
        ()=> {
            this.pedagogico = {
                motivos:"",
                sexto_grado_cursado:"",
                ubicacion_centro_anterior:"",
                codigo_escuela:"",
                codigo_rendimiento:"",
                cod_asignatura_dificultad:"",
                cod_asignatura_facilidad:"",
                codigo_estudio:"",
                cod_consideracion:"",
                obs_reportes:"",
                obs_expulsion:"",
                obs_reprobado:""
                }
                swal.fire({
                    title: 'Registro creado exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                
        this.get_pedagogicos();
        }
        );
    }

    delete_pedagogico(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        codigo_pedagogicos:id
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
                this.service.delete_pedagogico(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_pedagogicos();
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




    update_pedagogico(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_pedagogicos:this.id
        };
        this.pedagogico2=this.pedagogico;
        if(this.pedagogico2.motivos==""){
            this.pedagogico2.motivos=this.motivos;
        }
        if(this.pedagogico2.sexto_grado_cursado==""){
            this.pedagogico2.sexto_grado_cursado=this.sexto_grado_cursado;
        }
        if(this.pedagogico2.ubicacion_centro_anterior==""){
            this.pedagogico2.ubicacion_centro_anterior=this.ubicacion_centro_anterior;
        }
        if(this.pedagogico2.cod_asignatura_dificultad==""){
            this.pedagogico2.cod_asignatura_dificultad=this.cod_asignatura_dificultad;
        }
        if(this.pedagogico2.cod_asignatura_facilidad==""){
            this.pedagogico2.cod_asignatura_facilidad=this.cod_asignatura_facilidad;
        }
        if(this.pedagogico2.cod_consideracion==""){
            this.pedagogico2.cod_consideracion=this.cod_consideracion;
        }
        if(this.pedagogico2.codigo_escuela==""){
            this.pedagogico2.codigo_escuela=this.codigo_escuela;
        }
        if(this.pedagogico2.codigo_estudio==""){
            this.pedagogico2.codigo_estudio=this.codigo_estudio;
        }
        if(this.pedagogico2.codigo_rendimiento==""){
            this.pedagogico2.codigo_rendimiento=this.codigo_rendimiento;
        }
        if(this.pedagogico2.obs_expulsion==""){
            this.pedagogico2.obs_expulsion=this.obs_expulsion;
        }
        if(this.pedagogico2.obs_reportes==""){
            this.pedagogico2.obs_reportes=this.obs_reportes;
        }
        if(this.pedagogico2.obs_reprobado==""){
            this.pedagogico2.obs_reprobado=this.obs_reprobado;
        }
        this.service.update_pedagogico(load, this.pedagogico2).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.pedagogico={
                motivos:"",
                sexto_grado_cursado:"",
                ubicacion_centro_anterior:"",
                codigo_escuela:"",
                codigo_rendimiento:"",
                cod_asignatura_dificultad:"",
                cod_asignatura_facilidad:"",
                codigo_estudio:"",
                cod_consideracion:"",
                obs_reportes:"",
                obs_expulsion:"",
                obs_reprobado:""
            };
            swal.fire({
                title: 'Registro actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_pedagogicos();
        }
        );
        
    }

    pass_code(id, motivos, sexto_grado_cursado, ubicacion_centro_anterior, codigo_escuela, codigo_rendimiento, cod_asignatura_dificultad, cod_asignatura_facilidad, codigo_estudio, cod_consideracion, obs_reportes, obs_expulsion, obs_reprobado) {
        this.id = id;
        this.motivos = motivos;
        this.sexto_grado_cursado = sexto_grado_cursado;
        this.ubicacion_centro_anterior = ubicacion_centro_anterior;
        this.codigo_escuela = codigo_escuela;
        this.codigo_rendimiento = codigo_rendimiento;
        this.cod_asignatura_dificultad = cod_asignatura_dificultad;
        this.cod_asignatura_facilidad = cod_asignatura_facilidad;
        this.codigo_estudio = codigo_estudio;
        this.cod_consideracion = cod_consideracion;
        this.obs_reportes = obs_reportes;
        this.obs_expulsion = obs_expulsion;
        this.obs_reprobado = obs_reprobado;
    }

    isShown: boolean = false ; // hidden by default


    toggleShow() {

    this.isShown = ! this.isShown;

    }
}