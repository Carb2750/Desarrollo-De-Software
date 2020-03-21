import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_deportes.components.html'
})

export class GetDeporteComponent implements OnInit{
    public listado_deporte:any[];

    constructor(public service:AppService) {
        this.listado_deporte = [];
    }

    public id;
    

    public deporte = {
        descripcion:""
    }

    ngOnInit(){
        this.get_deportes();
    }


    get_deportes() {
        var response;
        this.service.get_deportes().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_deporte = response;
                console.log(response);
            }
        )
    }

    insert_deporte(){
        var response;
        this.service.insert_deporte(this.deporte).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.deporte={
                descripcion:""
            }
        this.get_deportes();
        }
        );
    }

    delete_deporte(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_act_deportiva:id
        }
        this.service.delete_deporte(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_deportes();
        }
        );
    }




    update_deporte(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_act_deportiva:this.id
        };

        

        this.service.update_deporte(load, this.deporte).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.deporte = {
                descripcion:""
            };
            this.get_deportes();
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