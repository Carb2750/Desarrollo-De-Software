import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_facilidad.components.html'
})

export class GetFacilidadComponent implements OnInit{
    public listado_facilidad:any[];

    constructor(public service:AppService) {
        this.listado_facilidad = [];
    }


    public id;

    public facilidad = {
        descripcion:""
    }

    ngOnInit(){
        this.get_facilidades();
    }

    get_facilidades() {
        var response;
        this.service.get_facilidades().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_facilidad = response;
                console.log(response);
            }
        )
    }

    insert_facilidad(){
        var response;
        this.service.insert_facilidad(this.facilidad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.facilidad={
                descripcion:""
            }
        this.get_facilidades();
        }
        );
    }

    delete_facilidad(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_asignatura_facilidad:id
        }
        this.service.delete_facilidad(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_facilidades();
        }
        );
    }




    update_facilidad(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_asignatura_facilidad:this.id
        };

        

        this.service.update_facilidad(load, this.facilidad).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.facilidad = {
                descripcion:""
            };
            this.get_facilidades();
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