import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2'

@Component({
    selector: 'get_frontend',
    templateUrl: './get_modalidad.components.html'
})

export class GetModalidadComponent implements OnInit{
    public listado_modalidad:any[];

    constructor(public service:AppService) {
        this.listado_modalidad = [];
    }

    public id;
    

    public modalidad = {
        desc_modadlidad:""
    }

    ngOnInit(){
        this.get_modalidades();
    }

    get_modalidades() {
        var response;
        this.service.get_modalidades().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_modalidad = response;
            }
        )
    }

    insert_modalidad(){
        var response;
        this.service.insert_modalidad(this.modalidad).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.modalidad={
                desc_modadlidad:""
            }
        this.get_modalidades();
        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Modalidad agregada exitosamente!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        );
    }

    delete_modalidad(id){

                    
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_modalidad:id
        }

        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar esta modalidad?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_modalidad(load).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.get_modalidades();
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




    update_modalidad(){
        var response;
        var load={
            cod_modalidad:this.id
        };

        

        this.service.update_modalidad(load, this.modalidad).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.modalidad = {
                desc_modadlidad:""
            };
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Modalidad actualizada exitosamente!',
                showConfirmButton: false,
                timer: 1500
              })
            this.get_modalidades();
            
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