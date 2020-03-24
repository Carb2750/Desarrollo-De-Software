import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

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
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
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
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.documento={
                descrip_doc:""
            }
            swal.fire({
                title: 'Documento agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
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
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este documento?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_documento(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_documentos();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El documento a sido borrado.',
                'success'
              )
            }
          })
        
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
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.documento = {
                descrip_doc:""
            };
            swal.fire({
                title: 'Documento actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
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

}