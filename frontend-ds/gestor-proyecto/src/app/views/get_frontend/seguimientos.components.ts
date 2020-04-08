import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';
import { isNull } from 'util';

@Component({
    selector: 'get_frontend',
    templateUrl: './seguimientos.html'
})

export class GetSeguimientosComponent implements OnInit{
    public listado_seguimientos:any[];
    public listado_alumnos: any[];
    public listado_usuarios: any[];

    constructor(public service:AppService) {
        this.listado_seguimientos = [];
    }


     

    public id: number;
    public codigo_expediente:"";
    public codigo_usuario:"";
    public motivo:"";

    public seguimiento = {
        codigo_usuario:"",
        codigo_expediente:"",
        motivo_sesion:""
    }
    public seguimiento2 = {
        codigo_usuario:"",
        codigo_expediente:"",
        motivo_sesion:""
    }

    

    ngOnInit(){
        this.get_seguimientos();
        this.get_codigos_usuarios();
        this.get_codigos_alumnos();
    }


    get_codigos_alumnos() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                this.listado_alumnos = [];
            },
            () => {
                this.listado_alumnos = response;
            }
        )
    }

    

    get_codigos_usuarios() {
        var response;
        this.service.get_usuarios().subscribe(
            data => response = data,
            err => {
                this.listado_usuarios = [];
            },
            () => {
                this.listado_usuarios = response;
            }
        )
    }

    get_seguimientos() {
        var response;
        this.service.get_seguimiento().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_seguimientos = response;
            }
        )
    }


    insert_seguimiento(){
        var response;
        this.service.insert_seguimiento(this.seguimiento).subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            ()=> {
                this.seguimiento={
                    codigo_usuario:"",
                    codigo_expediente:"",
                    motivo_sesion:""
                }
                swal.fire({
                    title: 'Datos guardados exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            this.get_seguimientos();
            }
        ); 
        
    }




    delete_seguimiento(id){
        var response;
        var load={
            codigo_sesion:id
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
                this.service.delete_seguimiento(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_seguimientos();
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




    update_seguimiento(){
        var response;
        var load={
            codigo_sesion:this.id
        };
        this.seguimiento2=this.seguimiento;
        if(this.seguimiento2.codigo_expediente==""){
            this.seguimiento2.codigo_expediente=this.codigo_expediente;
        }
        if(this.seguimiento2.motivo_sesion==""){
            this.seguimiento2.motivo_sesion=this.motivo;
        }
        if(this.seguimiento2.codigo_usuario==""){
            this.seguimiento2.codigo_usuario=this.codigo_usuario;
        }
        this.service.update_seguimiento(load, this.seguimiento2).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.seguimiento = {
                codigo_usuario:"",
                codigo_expediente:"",
                motivo_sesion:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_seguimientos();
        }
        );
        
    }

    pass_code(id,motivo,codigo_usuario,codigo_expediente) {
        this.id = id;
        this.motivo = motivo;
        this.codigo_usuario = codigo_usuario;
        this.codigo_expediente = codigo_expediente;
    }

    

    isShown: boolean = false ; // hidden by default


    toggleShow() {

    this.isShown = ! this.isShown;

    }

}