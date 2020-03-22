import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_ciudad.components.html'
})

export class GetCiudadComponent implements OnInit {
    public listado_ciudad:any[];

    constructor(public service:AppService) {
        this.listado_ciudad = [];
    }

    public id;
    

    public ciudad = {
        nom_ciudad:""
    }

    
    ngOnInit(){
        this.get_ciudades();
    }

    get_ciudades() {
        var response;
        this.service.get_ciudades().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                  })
            },
            () => {
                this.listado_ciudad = response;
                console.log(response);
            }
        )
    }

    

    insert_ciudad(){
        var response;
        this.service.insert_ciudad(this.ciudad).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.ciudad={
                nom_ciudad:""
            }
            swal.fire({
                title: 'Ciudad agregada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_ciudades();
        }
        );
    }

    delete_ciudad(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        cod_ciudad:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta ciudad?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_ciudad(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_ciudades();
                    }
                    );
              swal.fire(
                'Borrado!',
                'La ciudad a sido borrada.',
                'success'
              )
            }
          })
    }




    update_ciudad(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_ciudad:this.id
        };

       

        this.service.update_ciudad(load, this.ciudad).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
                })
        },
        ()=> {
            this.ciudad = {
                nom_ciudad:""
            };
            swal.fire({
                title: 'Ciudad actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_ciudades();
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