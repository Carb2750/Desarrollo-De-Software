import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_relacionsocial.components.html'
})

export class GetRelacionSocialComponent implements OnInit{
    public listado_relacionsocial:any[];

    constructor(public service:AppService) {
        this.listado_relacionsocial = [];
    }


    public id;

    public relacionsocial = {
        descripcion:""
    }

    ngOnInit(){
        this.get_relacionsocial();
    }

    get_relacionsocial() {
        var response;
        this.service.get_relacionsocial().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_relacionsocial = response;
                console.log(response);
            }
        )
    }

    insert_relacionsocial(){
        var response;
        this.service.insert_relacionsocial(this.relacionsocial).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.relacionsocial={
                descripcion:""
            }
            swal.fire({
                title: 'Datos guardados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_relacionsocial();
        }
        );
    }

    delete_relacionsocial(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_relaciones_sociales:id
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
                this.service.delete_relacionsocial(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_relacionsocial();
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




    update_relacionsocial(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_relaciones_sociales:this.id
        };

        

        this.service.update_relacionsocial(load, this.relacionsocial).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.relacionsocial = {
                descripcion:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_relacionsocial();
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