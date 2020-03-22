import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_rendimiento.components.html'
})

export class GetRendimientoComponent implements OnInit{
    public listado_rendimientoacademico:any[];

    constructor(public service:AppService) {
        this.listado_rendimientoacademico = [];
    }

    public id;
    

    public rendimientoacademico = {
        descripcion:""
    }

    ngOnInit(){
        this.get_rendimientoacademico();
    }

    get_rendimientoacademico() {
        var response;
        this.service.get_rendimientoacademico().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_rendimientoacademico = response;
                console.log(response);
            }
        )
    }

    insert_rendimientoacademico(){
        var response;
        this.service.insert_rendimientoacademico(this.rendimientoacademico).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.rendimientoacademico={
                descripcion:""
            }
            swal.fire({
                title: 'Datos guardados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_rendimientoacademico();
        }
        );
    }

    delete_rendimientoacademico(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_rendimiento:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar el registro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_rendimientoacademico(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_rendimientoacademico();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El registro a sido borrado.',
                'success'
              )
            }
          })
    }




    update_rendimientoacademico(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_rendimiento:this.id
        };


        this.service.update_rendimientoacademico(load, this.rendimientoacademico).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.rendimientoacademico = {
                descripcion:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_rendimientoacademico();
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