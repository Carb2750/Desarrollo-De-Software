import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_estudio.components.html'
})

export class GetEstudioComponent implements OnInit{
    public listado_estudio:any[];

    constructor(public service:AppService) {
        this.listado_estudio = [];
    }

    public id;
    

    public estudio = {
        descripcion:""
    }


    ngOnInit(){
        this.get_estudios();
    }


    get_estudios() {
        var response;
        this.service.get_estudios().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_estudio = response;
                console.log(response);
            }
        )
    }

    insert_estudio(){
        var response;
        this.service.insert_estudio(this.estudio).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.estudio={
                descripcion:""
            }
        this.get_estudios();
        }
        );
    }

    delete_estudio(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_estudio:id
        }
        this.service.delete_estudio(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_estudios();
        }
        );
    }




    update_estudio(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_estudio:this.id
        };

        

        this.service.update_estudio(load, this.estudio).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.estudio = {
                descripcion:""
            };
            this.get_estudios();
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