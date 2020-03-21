import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_dificultad.components.html'
})

export class GetDificultadComponent implements OnInit{
    public listado_dificultad:any[];

    constructor(public service:AppService) {
        this.listado_dificultad = [];
    }

    public id;
    

    public dificultad = {
        descripcion:""
    }

    ngOnInit(){
        this.get_dificultades();
    }

    get_dificultades() {
        var response;
        this.service.get_dificultades().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_dificultad = response;
                console.log(response);
            }
        )
    }

    insert_dificultad(){
        var response;
        this.service.insert_dificultad(this.dificultad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.dificultad={
                descripcion:""
            }
        this.get_dificultades();
        }
        );
    }

    delete_dificultad(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_asignatura_dificultad:id
        }
        this.service.delete_dificultad(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_dificultades();
        }
        );
    }




    update_dificultad(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_asignatura_dificultad:this.id
        };

        

        this.service.update_dificultad(load, this.dificultad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.dificultad = {
                descripcion:""
            };
            this.get_dificultades();
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