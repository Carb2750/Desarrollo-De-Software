import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_pedagogicos.components.html'
})

export class GetPedagogicosComponent implements OnInit{
    public listado_pedagogicos:any[];

    constructor(public service:AppService) {
        this.listado_pedagogicos = [];
    }

    public id;
    

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

    ngOnInit(){
        this.get_pedagogicos();
    }

    get_pedagogicos() {
        var response;
        this.service.get_pedagogicos().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_pedagogicos = response;
                console.log(response);
            }
        )
    }

    insert_pedagogico(){
        var response;
        this.service.insert_pedagogico(this.pedagogico).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
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
        this.service.delete_pedagogico(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_pedagogicos();
        }
        );
    }




    update_pedagogico(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_pedagogicos:this.id
        };


        this.service.update_pedagogico(load, this.pedagogico).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
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
            this.get_pedagogicos();
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