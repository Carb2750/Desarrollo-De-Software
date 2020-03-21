import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_rendimiento.components.html'
})

export class GetRendimientoComponent implements OnInit{
    public listado_rendimientoacademico:any[];

    constructor(public service:AppService) {
        this.listado_rendimientoacademico = [];
    }

    public id;
    

    public rendimientoacademico = {
        descripcion:""
    }

    ngOnInit(){
        this.get_rendimientoacademico();
    }

    get_rendimientoacademico() {
        var response;
        this.service.get_rendimientoacademico().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_rendimientoacademico = response;
                console.log(response);
            }
        )
    }

    insert_rendimientoacademico(){
        var response;
        this.service.insert_rendimientoacademico(this.rendimientoacademico).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.rendimientoacademico={
                descripcion:""
            }
        this.get_rendimientoacademico();
        }
        );
    }

    delete_rendimientoacademico(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_rendimiento:id
        }
        this.service.delete_rendimientoacademico(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_rendimientoacademico();
        }
        );
    }




    update_rendimientoacademico(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_rendimiento:this.id
        };


        this.service.update_rendimientoacademico(load, this.rendimientoacademico).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.rendimientoacademico = {
                descripcion:""
            };
            this.get_rendimientoacademico();
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

    toggleShow1() {

        this.isShown = ! this.isShown;
    
        }
}