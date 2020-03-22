import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_relacionamistosa.components.html'
})

export class GetRelacionAmistosaComponent implements OnInit{
    public listado_relacionamistosa:any[];

    constructor(public service:AppService) {
        this.listado_relacionamistosa = [];
    }


    public id;

    public relacionamistosa = {
        descripcion:""
    }

    ngOnInit(){
        this.get_relacionamistosa();
    }

    get_relacionamistosa() {
        var response;
        this.service.get_relacionamistosa().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_relacionamistosa = response;
                console.log(response);
            }
        )
    }

    insert_relacionamistosa(){
        var response;
        this.service.insert_relacionamistosa(this.relacionamistosa).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.relacionamistosa={
                descripcion:""
            }
            swal.fire({
                title: 'Datos guardados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_relacionamistosa();
        }
        );
    }

    delete_relacionamistosa(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_relaciones_amistosas:id
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
                this.service.delete_relacionamistosa(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_relacionamistosa();
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




    update_relacionamistosa(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_relaciones_amistosas:this.id
        };

        

        this.service.update_relacionamistosa(load, this.relacionamistosa).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.relacionamistosa = {
                descripcion:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_relacionamistosa();
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