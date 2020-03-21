import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_secciones.components.html'
})

export class GetSeccionComponent implements OnInit{
    public listado_seccion:any[];

    constructor(public service:AppService) {
        this.listado_seccion = [];
    }


    public id;

    public seccion = {
        desc_seccion:""
    }

    ngOnInit(){
        this.get_secciones();
    }

    get_secciones() {
        var response;
        this.service.get_secciones().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_seccion = response;
                console.log(response);
            }
        )
    }

    insert_seccion(){
        var response;
        this.service.insert_seccion(this.seccion).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.seccion={
                desc_seccion:""
            }
        this.get_secciones();
        }
        );
    }

    delete_seccion(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_seccion:id
        }
        this.service.delete_seccion(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_secciones();
        }
        );
    }




    update_seccion(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_seccion:this.id
        };

        console.log("adssadsadsadasdsadsa: " + this.seccion[0]);

        this.service.update_seccion(load, this.seccion).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.seccion = {
                desc_seccion:""
            };
            this.get_secciones();
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