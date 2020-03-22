import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_estudio.components.html'
})

export class GetEstudioComponent implements OnInit{
    public listado_estudio:any[];

    constructor(public service:AppService) {
        this.listado_estudio = [];
    }

    public id;
    

    public estudio = {
        descripcion:""
    }


    ngOnInit(){
        this.get_estudios();
    }


    get_estudios() {
        var response;
        this.service.get_estudios().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_estudio = response;
                console.log(response);
            }
        )
    }

    insert_estudio(){
        var response;
        this.service.insert_estudio(this.estudio).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.estudio={
                descripcion:""
            }
            swal.fire({
                title: 'Datos agregados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_estudios();
        }
        );
    }

    delete_estudio(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_estudio:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este registro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_estudio(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_estudios();
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




    update_estudio(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_estudio:this.id
        };

        

        this.service.update_estudio(load, this.estudio).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.estudio = {
                descripcion:""
            };
            swal.fire({
                title: 'Característica actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_estudios();
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