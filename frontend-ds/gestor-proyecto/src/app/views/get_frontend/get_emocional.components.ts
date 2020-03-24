import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_emocional.components.html'
})

export class GetEmocionalComponent implements OnInit{
    public listado_emocional:any[];

    constructor(public service:AppService) {
        this.listado_emocional = [];
    }


    public id;

    public emocional = {
        descripcion:""
    }

    ngOnInit(){
        this.get_emocionales();
    }

    get_emocionales() {
        var response;
        this.service.get_emocionales().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_emocional = response;
                console.log(response);
            }
        )
    }

    insert_emocional(){
        var response;
        this.service.insert_emocional(this.emocional).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.emocional={
                descripcion:""
            }
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Datos guardados correctamente',
                showConfirmButton: false,
                timer: 1500
              })
        this.get_emocionales();
        }
        );
    }

    delete_emocional(id){
        var response;
        var load={
            cod_problema_emocional:id
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
                this.service.delete_emocional(load).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.get_emocionales();
                }
                );
            
              swal.fire(
                'Borrado!',
                'El registro a sido borrado',
                'success'                
              )
              
            }
          })
        
        
    }




    update_emocional(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_problema_emocional:this.id
        };


        this.service.update_emocional(load, this.emocional).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.emocional = {
                descripcion:""
            };
            this.get_emocionales();
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Datos actualizados correctamente',
                showConfirmButton: false,
                timer: 1500
              })
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