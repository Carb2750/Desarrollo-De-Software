import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_artes.components.html'
})

export class GetArteComponent implements OnInit{
    public listado_arte:any[];

    constructor(public service:AppService) {
        this.listado_arte = [];
    }


    public id;

    public arte = {
        descripcion:""
    }

    ngOnInit(){
        this.get_artes();
    }

    get_artes() {
        var response;
        this.service.get_artes().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_arte = response;
                console.log(response);
            }
        )
    }

    insert_arte(){
        var response;
        this.service.insert_arte(this.arte).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.arte={
                descripcion:""
            }
            swal.fire({
                title: 'Actividad artística agregada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_artes();
        }
        );
    }

    delete_arte(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_act_artistica:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta actividad artística?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_arte(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_artes();
                    }
                    );
              swal.fire(
                'Borrado!',
                'La actividad artística a sido borrada.',
                'success'
              )
            }
          })
    }




    update_arte(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_act_artistica:this.id
        };

        

        this.service.update_arte(load, this.arte).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.arte = {
                descripcion:""
            };
            swal.fire({
                title: 'Actividad artística actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_artes();
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