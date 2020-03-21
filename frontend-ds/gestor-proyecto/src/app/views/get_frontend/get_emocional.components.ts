import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_emocional.components.html'
})

export class GetEmocionalComponent implements OnInit{
    public listado_emocional:any[];

    constructor(public service:AppService) {
        this.listado_emocional = [];
    }


    public id;

    public emocional = {
        descripcion:""
    }

    ngOnInit(){
        this.get_emocionales();
    }

    get_emocionales() {
        var response;
        this.service.get_emocionales().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_emocional = response;
                console.log(response);
            }
        )
    }

    insert_emocional(){
        var response;
        this.service.insert_emocional(this.emocional).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.emocional={
                descripcion:""
            }
        this.get_emocionales();
        }
        );
    }

    delete_emocional(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_problema_emocional:id
        }
        this.service.delete_emocional(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_emocionales();
        }
        );
    }




    update_emocional(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_problema_emocional:this.id
        };


        this.service.update_emocional(load, this.emocional).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.emocional = {
                descripcion:""
            };
            this.get_emocionales();
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