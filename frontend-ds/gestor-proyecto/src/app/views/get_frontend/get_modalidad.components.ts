import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_modalidad.components.html'
})

export class GetModalidadComponent implements OnInit{
    public listado_modalidad:any[];

    constructor(public service:AppService) {
        this.listado_modalidad = [];
    }

    public id;
    

    public modalidad = {
        desc_modadlidad:""
    }

    ngOnInit(){
        this.get_modalidades();
    }

    get_modalidades() {
        var response;
        this.service.get_modalidades().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_modalidad = response;
                console.log(response);
            }
        )
    }

    insert_modalidad(){
        var response;
        this.service.insert_modalidad(this.modalidad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.modalidad={
                desc_modadlidad:""
            }
        this.get_modalidades();
        }
        );
    }

    delete_modalidad(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_modalidad:id
        }
        this.service.delete_modalidad(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_modalidades();
        }
        );
    }




    update_modalidad(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_modalidad:this.id
        };

        

        this.service.update_modalidad(load, this.modalidad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.modalidad = {
                desc_modadlidad:""
            };
            this.get_modalidades();
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