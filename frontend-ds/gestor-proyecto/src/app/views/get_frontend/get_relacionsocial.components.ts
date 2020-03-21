import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_relacionsocial.components.html'
})

export class GetRelacionSocialComponent implements OnInit{
    public listado_relacionsocial:any[];

    constructor(public service:AppService) {
        this.listado_relacionsocial = [];
    }


    public id;

    public relacionsocial = {
        descripcion:""
    }

    ngOnInit(){
        this.get_relacionsocial();
    }

    get_relacionsocial() {
        var response;
        this.service.get_relacionsocial().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_relacionsocial = response;
                console.log(response);
            }
        )
    }

    insert_relacionsocial(){
        var response;
        this.service.insert_relacionsocial(this.relacionsocial).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.relacionsocial={
                descripcion:""
            }
        this.get_relacionsocial();
        }
        );
    }

    delete_relacionsocial(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_relaciones_sociales:id
        }
        this.service.delete_relacionsocial(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_relacionsocial();
        }
        );
    }




    update_relacionsocial(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_relaciones_sociales:this.id
        };

        

        this.service.update_relacionsocial(load, this.relacionsocial).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.relacionsocial = {
                descripcion:""
            };
            this.get_relacionsocial();
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