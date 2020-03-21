import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_documentos.components.html'
})

export class GetDocumentoComponent implements OnInit{
    public listado_documento:any[];

    constructor(public service:AppService) {
        this.listado_documento = [];
    }


    public id;

    public documento = {
        descrip_doc:""
    }

    ngOnInit(){
        this.get_documentos();
    }

    get_documentos() {
        var response;
        this.service.get_documentos().subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_documento = response;
                console.log(response);
            }
        )
    }

    insert_documento(){
        var response;
        this.service.insert_documento(this.documento).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.documento={
                descrip_doc:""
            }
        this.get_documentos();
        }
        );
    }

    delete_documento(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            tipo_documento:id
        }
        this.service.delete_documento(load).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.get_documentos();
        }
        );
    }




    update_documento(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            tipo_documento:this.id
        };


        this.service.update_documento(load, this.documento).subscribe(
        data => response = data,
        err => {
        console.log("Error al consultar servicio");
        },
        ()=> {
            this.documento = {
                descrip_doc:""
            };
            this.get_documentos();
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