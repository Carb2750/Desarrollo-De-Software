import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_relacionamistosa.components.html'
})

export class GetRelacionAmistosaComponent implements OnInit{
    public listado_relacionamistosa:any[];

    constructor(public service:AppService) {
        this.listado_relacionamistosa = [];
    }


    public id;

    public relacionamistosa = {
        descripcion:""
    }

    ngOnInit(){
        this.get_relacionamistosa();
    }

    get_relacionamistosa() {
        var response;
        this.service.get_relacionamistosa().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_relacionamistosa = response;
                console.log(response);
            }
        )
    }

    insert_relacionamistosa(){
        var response;
        this.service.insert_relacionamistosa(this.relacionamistosa).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.relacionamistosa={
                descripcion:""
            }
        this.get_relacionamistosa();
        }
        );
    }

    delete_relacionamistosa(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_relaciones_amistosas:id
        }
        this.service.delete_relacionamistosa(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_relacionamistosa();
        }
        );
    }




    update_relacionamistosa(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_relaciones_amistosas:this.id
        };

        

        this.service.update_relacionamistosa(load, this.relacionamistosa).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.relacionamistosa = {
                descripcion:""
            };
            this.get_relacionamistosa();
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