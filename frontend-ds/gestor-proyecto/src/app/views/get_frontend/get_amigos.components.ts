import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_amigos.components.html'
})

export class GetAmigoComponent implements OnInit{
    public listado_amigo:any[];

    constructor(public service:AppService) {
        this.listado_amigo = [];
    }

    public id;
    

    public amigo = {
        descripcion:""
    }

    ngOnInit(){
        this.get_amigos();
    }

    get_amigos() {
        var response;
        this.service.get_amigos().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_amigo = response;
                console.log(response);
            }
        )
    }

    insert_amigo(){
        var response;
        this.service.insert_amigo(this.amigo).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.amigo={
                descripcion:""
            }
        this.get_amigos();
        }
        );
    }

    delete_amigo(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_mejor_amigo:id
        }
        this.service.delete_amigo(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_amigos();
        }
        );
    }




    update_amigo(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_mejor_amigo:this.id
        };

        

        this.service.update_amigo(load, this.amigo).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.amigo = {
                descripcion:""
            };
            this.get_amigos();
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