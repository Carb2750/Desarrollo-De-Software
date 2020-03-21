import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_ciudad.components.html'
})

export class GetCiudadComponent implements OnInit {
    public listado_ciudad:any[];

    constructor(public service:AppService) {
        this.listado_ciudad = [];
    }

    public id;
    

    public ciudad = {
        nom_ciudad:""
    }

    
    ngOnInit(){
        console.log("component has been initialized!");
        this.get_ciudades();
    }

    get_ciudades() {
        var response;
        this.service.get_ciudades().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_ciudad = response;
                console.log(response);
            }
        )
    }

    

    insert_ciudad(){
        var response;
        this.service.insert_ciudad(this.ciudad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.ciudad={
                nom_ciudad:""
            }
        this.get_ciudades();
        }
        );
    }

    delete_ciudad(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        cod_ciudad:id
        }
        this.service.delete_ciudad(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_ciudades();
        }
        );
    }




    update_ciudad(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_ciudad:this.id
        };

       

        this.service.update_ciudad(load, this.ciudad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.ciudad = {
                nom_ciudad:""
            };
            this.get_ciudades();
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