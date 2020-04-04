import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'demo',
    template:`
        <h2>Hi, demo1 !!</h2>
    `
})
export class RedBullet{
    static codigo_expediente:number = 0;
    get codigo_expediente(): number { return RedBullet.codigo_expediente; }
    set codigo_expediente(val: number) { RedBullet.codigo_expediente = val; }

}
@Component({
    selector: 'get_frontend',
    templateUrl: './get_alumno.components.html'
})
export class GetAlumnosComponent implements OnInit{
    public listado_alumno:any[];

    constructor(public service:AppService) {
        this.listado_alumno = [];
    }

    public id;
    

    public alumno = {
        id_alumno:"",
        nombre_alumno:"",
        segundo_nombre:"",
        apellido_alumno:"",
        segundo_apellido:"",
        codigo_expediente:Number(),
        fecha_nacimiento:"",
        sexo:"",
        nacionalidad:"",
        lugar_procedencia:"",
        residencia_actual:"",
        nombre_padre:"",
        tel_padre:"",
        ocupacion_padre:"",
        nombre_madre:"",
        tel_madre:"",
        ocupacion_madre:"",
        aspectos_pedagogicos:Number(""),
        cod_aspectos_personal:Number(""),
        tel_celular:"",
        tel_casa:"",
        tel_trabajo:"",
        correo:"",
        codigo_ficha:Number("")
    }

    ngOnInit(){
        this.get_alumno();
    }

    get_alumno() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_alumno = response;
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

    insert_expediente(){
        var response;
        this.service.insert_expediente().subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            swal.fire({
                title: 'Mejor amigo agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        }
        );
    }

    insert_alumno(){
        var response,response1;
        var expediente = new RedBullet();
        this.service.get_ultimoexpediente().subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            expediente.codigo_expediente=Number(response[0].codigo_expediente)+1;
            this.alumno.codigo_expediente=expediente.codigo_expediente;     
            this.service.insert_alumno(this.alumno).subscribe(
                data => response1 = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.alumno = {
                        id_alumno:"",
                        nombre_alumno:"",
                        segundo_nombre:"",
                        apellido_alumno:"",
                        segundo_apellido:"",
                        codigo_expediente:Number(),
                        fecha_nacimiento:"",
                        sexo:"",
                        nacionalidad:"",
                        lugar_procedencia:"",
                        residencia_actual:"",
                        nombre_padre:"",
                        tel_padre:"",
                        ocupacion_padre:"",
                        nombre_madre:"",
                        tel_madre:"",
                        ocupacion_madre:"",
                        aspectos_pedagogicos:Number(""),
                        cod_aspectos_personal:Number(""),
                        tel_celular:"",
                        tel_casa:"",
                        tel_trabajo:"",
                        correo:"",
                        codigo_ficha:Number("")
                        }
                        swal.fire({
                            title: 'Registro creado exitosamente!',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                this.get_alumno();
                }
            );
        }
        );
    }


    delete_alumno(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        id_alumno:id
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
                this.service.delete_alumno(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_alumno();
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




    update_alumno(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            id_alumno:this.id
        };
        this.service.update_alumno(load, this.alumno).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.alumno={
                id_alumno:"",
                nombre_alumno:"",
                segundo_nombre:"",
                apellido_alumno:"",
                segundo_apellido:"",
                codigo_expediente:Number(),
                fecha_nacimiento:"",
                sexo:"",
                nacionalidad:"",
                lugar_procedencia:"",
                residencia_actual:"",
                nombre_padre:"",
                tel_padre:"",
                ocupacion_padre:"",
                nombre_madre:"",
                tel_madre:"",
                ocupacion_madre:"",
                aspectos_pedagogicos:Number(""),
                cod_aspectos_personal:Number(""),
                tel_celular:"",
                tel_casa:"",
                tel_trabajo:"",
                correo:"",
                codigo_ficha:Number("")
            };
            swal.fire({
                title: 'Registro actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_alumno();
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