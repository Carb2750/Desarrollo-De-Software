import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';


@Component({
    selector: 'get_frontend',
    templateUrl: './get_cursos.components.html'
})

export class GetCursoComponent implements OnInit{
    public listado_curso:any[];

    constructor(public service:AppService, private router: Router) {
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

    alumnos(){
        this.router.navigateByUrl('/alumnos');
    }
    alumnos_trastornos(){
        this.router.navigateByUrl('/alumnos_trastornos');
    }
    artes(){
        this.router.navigateByUrl('/artes');
    }
    asignatura_dificultad(){
        this.router.navigateByUrl('/asignatura_dificultad');
    }
    asignatura_facilidad(){
        this.router.navigateByUrl('/asignatura_facilidad');
    }
    aspectos_pedagogicos(){
        this.router.navigateByUrl('/aspectos_pedagogicos');
    }
    aspectos_personales(){
        this.router.navigateByUrl('/aspectos_personales');
    }
    ciudades(){
        this.router.navigateByUrl('/ciudades');
    }
    consideracion(){
        this.router.navigateByUrl('/consideracion');
    }
    vive(){
        this.router.navigateByUrl('/vive');
    }
    cursos(){
        this.router.navigateByUrl('/cursos');
    }
    deportes(){
        this.router.navigateByUrl('/deportes');
    }
    documentos(){
        this.router.navigateByUrl('/documentos');
    }
    estudio_constante(){
        this.router.navigateByUrl('/estudio_constante');
    }
    fichas(){
        this.router.navigateByUrl('/fichas');
    }
    ficha_completa(){
        this.router.navigateByUrl('/ficha_completa');
    }
    ficha_documentos(){
        this.router.navigateByUrl('/ficha_documentos');
    }
    hoja_registro(){
        this.router.navigateByUrl('/hoja_registro');
    }
    jornadas(){
        this.router.navigateByUrl('/jornadas');
    }
    mejor_amigo(){
        this.router.navigateByUrl('/mejor_amigo');
    }
    menu(){
        this.router.navigateByUrl('/menu');
    }
    modalidades(){
        this.router.navigateByUrl('/modalidades');
    }
    registro(){
        this.router.navigateByUrl('/registro');
    }
    relaciones_amistosas(){
        this.router.navigateByUrl('/relaciones_amistosas');
    }
    relaciones_sociales(){
        this.router.navigateByUrl('/relaciones_sociales');
    }
    rendimiento_academico(){
        this.router.navigateByUrl('/rendimiento_academico');
    }
    problemas_emocionales(){
        this.router.navigateByUrl('/problemas_emocionales');
    }
    secciones(){
        this.router.navigateByUrl('/secciones');
    }
    seguimientos(){
        this.router.navigateByUrl('/seguimientos');
    }
    tipo_escuela(){
        this.router.navigateByUrl('/tipo_escuela');
    }
    trastornos(){
        this.router.navigateByUrl('/trastornos');
    }
    listado_usuarioss(){
        this.router.navigateByUrl('/listado_usuarios');
    }
    salir(){
        this.service.reset_session();
        this.router.navigateByUrl('/ingreso');
    }

}