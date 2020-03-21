import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_artes.components.html'
})

export class GetArteComponent implements OnInit{
    public listado_arte:any[];

    constructor(public service:AppService) {
        this.listado_arte = [];
    }


    public id;

    public arte = {
        descripcion:""
    }

    ngOnInit(){
        this.get_artes();
    }

    get_artes() {
        var response;
        this.service.get_artes().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_arte = response;
                console.log(response);
            }
        )
    }

    insert_arte(){
        var response;
        this.service.insert_arte(this.arte).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.arte={
                descripcion:""
            }
        this.get_artes();
        }
        );
    }

    delete_arte(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_act_artistica:id
        }
        this.service.delete_arte(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_artes();
        }
        );
    }




    update_arte(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_act_artistica:this.id
        };

        

        this.service.update_arte(load, this.arte).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.arte = {
                descripcion:""
            };
            this.get_artes();
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