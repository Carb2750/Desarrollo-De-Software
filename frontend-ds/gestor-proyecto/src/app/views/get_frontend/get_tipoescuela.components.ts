import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_tipoescuela.components.html'
})

export class GetTipoEscuelaComponent implements OnInit{
    public listado_tipoescuela:any[];

    constructor(public service:AppService) {
        this.listado_tipoescuela = [];
    }

    
    public id;

    public tipoescuela = {
        descripcion:""
    }

    ngOnInit(){
        this.get_tipoescuela();
    }

    get_tipoescuela() {
        var response;
        this.service.get_tipoescuela().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_tipoescuela = response;
                console.log(response);
            }
        )
    }

    insert_tipoescuela(){
        var response;
        this.service.insert_tipoescuela(this.tipoescuela).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.tipoescuela={
                descripcion:""
            }
            swal.fire({
                title: 'Tipo de escuela agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_tipoescuela();
        }
        );
    }

    delete_tipoescuela(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_escuela:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar el tipo de escuela?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_tipoescuela(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_tipoescuela();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El tipo de escuela a sido borrado.',
                'success'
              )
            }
          })
    }




    update_tipoescuela(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_escuela:this.id
        };

        

        this.service.update_tipoescuela(load, this.tipoescuela).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.tipoescuela = {
                descripcion:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_tipoescuela();
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