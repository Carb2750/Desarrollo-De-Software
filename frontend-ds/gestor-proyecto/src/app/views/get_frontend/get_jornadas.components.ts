import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_jornadas.components.html'
})

export class GetJornadaComponent implements OnInit{
    public listado_jornada:any[];

    constructor(public service:AppService) {
        this.listado_jornada = [];
    }

    public id;
    

    public jornada = {
        desc_jornada:""
    }

    ngOnInit(){
        this.get_jornadas();
    }

    get_jornadas() {
        var response;
        this.service.get_jornadas().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_jornada = response;
                console.log(response);
            }
        )
    }

    insert_jornada(){
        var response;
        this.service.insert_jornada(this.jornada).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.jornada={
                desc_jornada:""
            }
        this.get_jornadas();
        }
        );
    }

    delete_jornada(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_jornada:id
        }
        this.service.delete_jornada(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_jornadas();
        }
        );
    }




    update_jornada(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_jornada:this.id
        };

        

        this.service.update_jornada(load, this.jornada).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.jornada = {
                desc_jornada:""
            };
            this.get_jornadas();
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