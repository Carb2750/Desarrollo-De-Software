import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';


@Component({
    selector: 'get_frontend',
    templateUrl: './get_jornadas.components.html'
})

export class GetJornadaComponent implements OnInit{
    public listado_jornada:any[];

    constructor(public service:AppService) {
        this.listado_jornada = [];
    }

    public id;
    

    public jornada = {
        desc_jornada:""
    }

    ngOnInit(){
        this.get_jornadas();
    }

    get_jornadas() {
        var response;
        this.service.get_jornadas().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_jornada = response;
                console.log(response);
            }
        )
    }

    insert_jornada(){
        var response;
        this.service.insert_jornada(this.jornada).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.jornada={
                desc_jornada:""
            }
            swal.fire({
                title: 'Jornada agregada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_jornadas();
        }
        );
    }

    delete_jornada(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_jornada:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta jornada?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_jornada(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_jornadas();
                    }
                    );
              swal.fire(
                'Borrado!',
                'La jornada a sido borrada.',
                'success'
              )
            }
          })
    }




    update_jornada(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_jornada:this.id
        };

        

        this.service.update_jornada(load, this.jornada).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.jornada = {
                desc_jornada:""
            };
            swal.fire({
                title: 'Jornada actualizada exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_jornadas();
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