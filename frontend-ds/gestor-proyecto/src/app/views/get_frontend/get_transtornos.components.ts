import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_transtornos.components.html'
})

export class GetTranstornosComponent implements OnInit{
    public listado_transtornos:any[];

    constructor(public service:AppService) {
        this.listado_transtornos = [];
    }

    
    public id;

    public transtornos = {
        descripcion:""
    }

    ngOnInit(){
        this.get_transtornos();
    }

    get_transtornos() {
        var response;
        this.service.get_transtornos().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_transtornos = response;
                console.log(response);
            }
        )
    }

    insert_transtornos(){
        var response;
        this.service.insert_transtornos(this.transtornos).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.transtornos={
                descripcion:""
            }
        this.get_transtornos();
        }
        );
    }

    delete_transtornos(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_trans:id
        }
        this.service.delete_transtornos(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_transtornos();
        }
        );
    }




    update_transtornos(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_trans:this.id
        };

        

        this.service.update_transtornos(load, this.transtornos).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.transtornos = {
                descripcion:""
            };
            this.get_transtornos();
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