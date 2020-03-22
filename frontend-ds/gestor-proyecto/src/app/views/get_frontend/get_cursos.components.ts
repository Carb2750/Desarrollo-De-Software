import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';


@Component({
    selector: 'get_frontend',
    templateUrl: './get_cursos.components.html'
})

export class GetCursoComponent implements OnInit{
    public listado_curso:any[];

    constructor(public service:AppService) {
        this.listado_curso = [];
    }


    public id;

    public curso = {
        desc_curso:""
    }

    ngOnInit(){
        this.get_cursos();
    }



    get_cursos() {
        var response;
        this.service.get_cursos().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_curso = response;
                console.log(response);
            }
        )
    }

    insert_curso(){
        var response;
        this.service.insert_curso(this.curso).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.curso={
                desc_curso:""
            }
            swal.fire({
                title: 'Curso agregado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        this.get_cursos();
        }
        );
    }

    delete_curso(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            cod_curso:id
        }
        swal.fire({
            title: 'Advertencia!',
            text: "Esta seguro desea borrar este curso?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.service.delete_curso(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_cursos();
                    }
                    );
              swal.fire(
                'Borrado!',
                'El curso a sido borrado.',
                'success'
              )
            }
          })
        
    }




    update_curso(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_curso:this.id
        };
        this.service.update_curso(load, this.curso).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.curso = {
                desc_curso:""
            };
            swal.fire({
                title: 'Curso actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_cursos();
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