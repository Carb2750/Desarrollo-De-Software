import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_facilidad.components.html'
})

export class GetFacilidadComponent implements OnInit{
    public listado_facilidad:any[];

    constructor(public service:AppService) {
        this.listado_facilidad = [];
    }


    public id;

    public facilidad = {
        descripcion:""
    }

    ngOnInit(){
        this.get_facilidades();
    }

    get_facilidades() {
        var response;
        this.service.get_facilidades().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_facilidad = response;
                console.log(response);
            }
        )
    }

    insert_facilidad(){
        var response;
        this.service.insert_facilidad(this.facilidad).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.facilidad={
                descripcion:""
            }
            swal.fire({
                title: 'Asignatura agregada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_facilidades();
        }
        );
    }

    delete_facilidad(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_asignatura_facilidad:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta asignatura?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_facilidad(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_facilidades();
                    }
                    );
              swal.fire(
                'Borrado!',
                'La asignatura a sido borrada.',
                'success'
              )
            }
          })
    }




    update_facilidad(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_asignatura_facilidad:this.id
        };

        

        this.service.update_facilidad(load, this.facilidad).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.facilidad = {
                descripcion:""
            };
            swal.fire({
                title: 'Asignatura actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_facilidades();
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