import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_amigos.components.html'
})

export class GetAmigoComponent implements OnInit{
    public listado_amigo:any[];

    constructor(public service:AppService) {
        this.listado_amigo = [];
    }

    public id;
    

    public amigo = {
        descripcion:""
    }

    ngOnInit(){
        this.get_amigos();
    }

    get_amigos() {
        var response;
        this.service.get_amigos().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                  })
            },
            () => {
                this.listado_amigo = response;
                console.log(response);
            }
        )
    }

    insert_amigo(){
        var response;
        this.service.insert_amigo(this.amigo).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.amigo={
                descripcion:""
            }
            swal.fire({
                title: 'Mejor amigo agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_amigos();
        }
        );
    }

    delete_amigo(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_mejor_amigo:id
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
                this.service.delete_amigo(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_amigos();
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




    update_amigo(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_mejor_amigo:this.id
        };

        

        this.service.update_amigo(load, this.amigo).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.amigo = {
                descripcion:""
            };
            swal.fire({
                title: 'Mejor amigo actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_amigos();
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