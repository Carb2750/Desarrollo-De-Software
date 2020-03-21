import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_tipoescuela.components.html'
})

export class GetTipoEscuelaComponent implements OnInit{
    public listado_tipoescuela:any[];

    constructor(public service:AppService) {
        this.listado_tipoescuela = [];
    }

    
    public id;

    public tipoescuela = {
        descripcion:""
    }

    ngOnInit(){
        this.get_tipoescuela();
    }

    get_tipoescuela() {
        var response;
        this.service.get_tipoescuela().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_tipoescuela = response;
                console.log(response);
            }
        )
    }

    insert_tipoescuela(){
        var response;
        this.service.insert_tipoescuela(this.tipoescuela).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.tipoescuela={
                descripcion:""
            }
        this.get_tipoescuela();
        }
        );
    }

    delete_tipoescuela(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_escuela:id
        }
        this.service.delete_tipoescuela(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_tipoescuela();
        }
        );
    }




    update_tipoescuela(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_escuela:this.id
        };

        

        this.service.update_tipoescuela(load, this.tipoescuela).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.tipoescuela = {
                descripcion:""
            };
            this.get_tipoescuela();
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