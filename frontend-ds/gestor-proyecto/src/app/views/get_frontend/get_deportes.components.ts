import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_deportes.components.html'
})

export class GetDeporteComponent implements OnInit{
    public listado_deporte:any[];

    constructor(public service:AppService) {
        this.listado_deporte = [];
    }

    public id;
    

    public deporte = {
        descripcion:""
    }

    ngOnInit(){
        this.get_deportes();
    }


    get_deportes() {
        var response;
        this.service.get_deportes().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_deporte = response;
                console.log(response);
            }
        )
    }

    insert_deporte(){
        var response;
        this.service.insert_deporte(this.deporte).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.deporte={
                descripcion:""
            }
            swal.fire({
                title: 'Actividad deportiva agregada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_deportes();
        }
        );
    }

    delete_deporte(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_act_deportiva:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta actividad deportiva?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_deporte(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_deportes();
                    }
                    );
              swal.fire(
                'Borrado!',
                'La actividad deportiva a sido borrada.',
                'success'
              )
            }
          })
    }




    update_deporte(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_act_deportiva:this.id
        };

        

        this.service.update_deporte(load, this.deporte).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.deporte = {
                descripcion:""
            };
            swal.fire({
                title: 'Actividad deportiva actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_deportes();
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