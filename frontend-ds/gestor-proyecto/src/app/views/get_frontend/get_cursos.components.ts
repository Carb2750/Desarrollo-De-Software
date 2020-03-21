import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_cursos.components.html'
})

export class GetCursoComponent implements OnInit{
    public listado_curso:any[];

    constructor(public service:AppService) {
        this.listado_curso = [];
    }


    public id;

    public curso = {
        desc_curso:""
    }

    ngOnInit(){
        this.get_cursos();
    }



    get_cursos() {
        var response;
        this.service.get_cursos().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_curso = response;
                console.log(response);
            }
        )
    }

    insert_curso(){
        var response;
        this.service.insert_curso(this.curso).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.curso={
                desc_curso:""
            }
        this.get_cursos();
        }
        );
    }

    delete_curso(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_curso:id
        }
        this.service.delete_curso(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_cursos();
        }
        );
    }




    update_curso(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_curso:this.id
        };

        console.log("adssadsadsadasdsadsa: " + this.curso[0]);

        this.service.update_curso(load, this.curso).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.curso = {
                desc_curso:""
            };
            this.get_cursos();
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