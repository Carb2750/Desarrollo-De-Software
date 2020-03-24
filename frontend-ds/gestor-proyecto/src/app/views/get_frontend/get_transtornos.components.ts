import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_transtornos.components.html'
})

export class GetTranstornosComponent implements OnInit{
    public listado_transtornos:any[];

    constructor(public service:AppService) {
        this.listado_transtornos = [];
    }

    
    public id;

    public transtornos = {
        descripcion:""
    }

    ngOnInit(){
        this.get_transtornos();
    }

    get_transtornos() {
        var response;
        this.service.get_transtornos().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_transtornos = response;
                console.log(response);
            }
        )
    }

    insert_transtornos(){
        var response;
        this.service.insert_transtornos(this.transtornos).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.transtornos={
                descripcion:""
            }
            swal.fire({
                title: 'Trastorno agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_transtornos();
        }
        );
    }

    delete_transtornos(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_trans:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este trastorno?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_transtornos(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_transtornos();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El trastorno a sido borrado.',
                'success'
              )
            }
          })
    }




    update_transtornos(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_trans:this.id
        };

        

        this.service.update_transtornos(load, this.transtornos).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.transtornos = {
                descripcion:""
            };
            swal.fire({
                title: 'Trastorno actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_transtornos();
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