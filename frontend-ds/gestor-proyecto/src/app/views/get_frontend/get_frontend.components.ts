import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_frontend.components.html'
})

export class GetFrontendComponent implements OnInit{
    public listado_info:any[];

    constructor(public service:AppService) {
        this.listado_info = [];
    }

    public id;
    

    public usuario = {
        nombre:"",
        apellido:"",
        usuario:"",
        pass:"",
        correo:"",
        tipo:""
    
    }

    ngOnInit(){
        this.get_usuarios();
    }

    get_usuarios() {
        var response;
        this.service.get_usuarios().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_info = response;
                console.log(response);
            }
        )
    }

    errores(){
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algun campo requerido esta vacio!',
        })
    }

    insert_usuario(){
        var response;
        this.service.insert_usuario(this.usuario).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.usuario={
                nombre:"",
                apellido:"",
                usuario:"",
                pass:"",
                correo: "",
                tipo:""
            }
            swal.fire({
                title: 'Usuario agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_usuarios();
        }
        );
    }

    delete_usuario(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        codigo:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_usuario(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_usuarios();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El usuario a sido borrado.',
                'success'
              )
            }
          })
        
    }




    update_usuario(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo:this.id
        };


        this.service.update_usuario(load, this.usuario).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.usuario={
                nombre:"",
                apellido:"",
                usuario:"",
                pass:"",
                correo: "",
                tipo:""
            };
            swal.fire({
                title: 'Usuario actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_usuarios();
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