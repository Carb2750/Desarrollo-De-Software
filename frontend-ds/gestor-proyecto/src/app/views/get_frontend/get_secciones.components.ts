import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_secciones.components.html'
})

export class GetSeccionComponent implements OnInit{
    public listado_seccion:any[];

    constructor(public service:AppService) {
        this.listado_seccion = [];
    }


    public id;

    public seccion = {
        desc_seccion:""
    }

    ngOnInit(){
        this.get_secciones();
    }

    get_secciones() {
        var response;
        this.service.get_secciones().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_seccion = response;
                console.log(response);
            }
        )
    }

    insert_seccion(){
        var response;
        this.service.insert_seccion(this.seccion).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.seccion={
                desc_seccion:""
            }
            swal.fire({
                title: 'Seccion agregada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_secciones();
        }
        );
    }

    delete_seccion(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_seccion:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta seccción?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_seccion(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_secciones();
                    }
                    );
              swal.fire(
                'Borrado!',
                'La sección a sido borrada.',
                'success'
              )
            }
          })
        
    }




    update_seccion(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_seccion:this.id
        };
        

        this.service.update_seccion(load, this.seccion).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.seccion = {
                desc_seccion:""
            };
            swal.fire({
                title: 'Sección actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_secciones();
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