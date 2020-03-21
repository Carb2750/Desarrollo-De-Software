import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_consideracion.components.html'
})

export class GetConsideracionComponent implements OnInit{
    public listado_consideracion:any[];

    constructor(public service:AppService) {
        this.listado_consideracion = [];
    }


    public id;

    public consideracion = {
        descripcion:""
    }

    ngOnInit(){
        this.get_consideraciones();
    }

    get_consideraciones() {
        var response;
        this.service.get_consideraciones().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_consideracion = response;
                console.log(response);
            }
        )
    }

    insert_consideracion(){
        var response;
        this.service.insert_consideracion(this.consideracion).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.consideracion={
                descripcion:""
            }
        this.get_consideraciones();
        }
        );
    }

    delete_consideracion(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_consideracion:id
        }
        this.service.delete_consideracion(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_consideraciones();
        }
        );
    }




    update_consideracion(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_consideracion:this.id
        };

        

        this.service.update_consideracion(load, this.consideracion).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.consideracion = {
                descripcion:""
            };
            this.get_consideraciones();
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