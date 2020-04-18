import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_personales.components.html'
})

export class GetPersonalesComponent implements OnInit{
    public listado_personales:any[];
    public listado_codigo_convive: any[];
    public listado_codigo_sociales: any[];
    public listado_codigo_amistosa: any[];
    public listado_codigo_amigos: any[];
    public listado_codigo_deportes: any[];
    public listado_codigo_artes: any[];
    public listado_codigo_problemas: any[];

    constructor(public service:AppService, private router:Router) {
        this.listado_personales = [];
    }

    public id;
    public codigo_convive;
    public obs_residencias;
    public cod_relaciones_sociales;
    public cod_relaciones_amistosas;
    public obs_relaciones_amistosas;
    public obs_noviazgos;
    public cod_mejor_amigo;
    public obs_mejor_amigo;
    public cod_act_deportiva;
    public obs_actividades_deportivas;
    public cod_act_artistica;
    public obs_actividades_artisticas;
    public obs_religion;
    public cod_problema_emocional;
    public obs_ayudas;

    public personal = {
        codigo_convive:"",
        obs_residencias:"",
        cod_relaciones_sociales:"",
        cod_relaciones_amistosas:"",
        obs_relaciones_amistosas:"",
        obs_noviazgos:"",
        cod_mejor_amigo:"",
        obs_mejor_amigo:"",
        cod_act_deportiva:"",
        obs_actividades_deportivas:"",
        cod_act_artistica:"",
        obs_actividades_artisticas:"",
        obs_religion:"",
        cod_problema_emocional:"",
        obs_ayudas:""
    }
    public personal2 = {
        codigo_convive:"",
        obs_residencias:"",
        cod_relaciones_sociales:"",
        cod_relaciones_amistosas:"",
        obs_relaciones_amistosas:"",
        obs_noviazgos:"",
        cod_mejor_amigo:"",
        obs_mejor_amigo:"",
        cod_act_deportiva:"",
        obs_actividades_deportivas:"",
        cod_act_artistica:"",
        obs_actividades_artisticas:"",
        obs_religion:"",
        cod_problema_emocional:"",
        obs_ayudas:""
    }

    ngOnInit(){
        this.get_personales();
        this.get_codigos_convive();
        this.get_codigos_sociales();
        this.get_codigos_amistosa();
        this.get_codigos_amigos();
        this.get_codigos_deportes();
        this.get_codigos_artes();
        this.get_codigos_problemas();
    }

    get_personales() {
        var response;
        this.service.get_personales().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_personales = response;
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

    get_codigos_convive() {
        var response;
        this.service.get_convive().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_convive = [];
            },
            () => {
                this.listado_codigo_convive = response;
                console.log(response);
            }
        )
    }


    get_codigos_sociales() {
        var response;
        this.service.get_relacionsocial().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_sociales = [];
            },
            () => {
                this.listado_codigo_sociales = response;
                console.log(response);
            }
        )
    }

    get_codigos_amistosa() {
        var response;
        this.service.get_relacionamistosa().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_amistosa = [];
            },
            () => {
                this.listado_codigo_amistosa = response;
                console.log(response);
            }
        )
    }

    get_codigos_amigos() {
        var response;
        this.service.get_amigos().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_amigos = [];
            },
            () => {
                this.listado_codigo_amigos = response;
                console.log(response);
            }
        )
    }

    get_codigos_deportes() {
        var response;
        this.service.get_deportes().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_deportes = [];
            },
            () => {
                this.listado_codigo_deportes = response;
                console.log(response);
            }
        )
    }

    get_codigos_artes() {
        var response;
        this.service.get_artes().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_artes = [];
            },
            () => {
                this.listado_codigo_artes = response;
                console.log(response);
            }
        )
    }

    get_codigos_problemas() {
        var response;
        this.service.get_emocionales().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_problemas = [];
            },
            () => {
                this.listado_codigo_problemas = response;
                console.log(response);
            }
        )
    }

    insert_personal(){
        var response;
        this.service.insert_personales(this.personal).subscribe(
        data => response = data,
        err => {
            console.log(response);
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.personal = {
                    codigo_convive:"",
                    obs_residencias:"",
                    cod_relaciones_sociales:"",
                    cod_relaciones_amistosas:"",
                    obs_relaciones_amistosas:"",
                    obs_noviazgos:"",
                    cod_mejor_amigo:"",
                    obs_mejor_amigo:"",
                    cod_act_deportiva:"",
                    obs_actividades_deportivas:"",
                    cod_act_artistica:"",
                    obs_actividades_artisticas:"",
                    obs_religion:"",
                    cod_problema_emocional:"",
                    obs_ayudas:""
                }
                swal.fire({
                    title: 'Registro creado exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                
        this.get_personales();
        }
        );
    }

    delete_personal(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
        cod_aspectos_personal:id
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
                this.service.delete_personales(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_personales();
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




    update_personal(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            cod_aspectos_personal:this.id
        };
        this.personal2=this.personal;
        if(this.personal2.codigo_convive==""){
            this.personal2.codigo_convive=this.codigo_convive;
        }
        if(this.personal2.obs_residencias==""){
            this.personal2.obs_residencias=this.obs_residencias;
        }
        if(this.personal2.cod_relaciones_sociales==""){
            this.personal2.cod_relaciones_sociales=this.cod_relaciones_sociales;
        }
        if(this.personal2.cod_relaciones_amistosas==""){
            this.personal2.cod_relaciones_amistosas=this.cod_relaciones_amistosas;
        }
        if(this.personal2.obs_relaciones_amistosas==""){
            this.personal2.obs_relaciones_amistosas=this.obs_relaciones_amistosas;
        }
        if(this.personal2.obs_noviazgos==""){
            this.personal2.obs_noviazgos=this.obs_noviazgos;
        }
        if(this.personal2.cod_mejor_amigo==""){
            this.personal2.cod_mejor_amigo=this.cod_mejor_amigo;
        }
        if(this.personal2.obs_mejor_amigo==""){
            this.personal2.obs_mejor_amigo=this.obs_mejor_amigo;
        }
        if(this.personal2.cod_act_deportiva==""){
            this.personal2.cod_act_deportiva=this.cod_act_deportiva;
        }
        if(this.personal2.obs_actividades_deportivas==""){
            this.personal2.obs_actividades_deportivas=this.obs_actividades_deportivas;
        }
        if(this.personal2.cod_act_artistica==""){
            this.personal2.cod_act_artistica=this.cod_act_artistica;
        }
        if(this.personal2.obs_actividades_artisticas==""){
            this.personal2.obs_actividades_artisticas=this.obs_actividades_artisticas;
        }
        if(this.personal2.obs_religion==""){
            this.personal2.obs_religion=this.obs_religion;
        }
        if(this.personal2.cod_problema_emocional==""){
            this.personal2.cod_problema_emocional=this.cod_problema_emocional;
        }
        if(this.personal2.obs_ayudas==""){
            this.personal2.obs_ayudas=this.obs_ayudas;
        }
        this.service.update_personales(load, this.personal).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.personal={
                codigo_convive:"",
                obs_residencias:"",
                cod_relaciones_sociales:"",
                cod_relaciones_amistosas:"",
                obs_relaciones_amistosas:"",
                obs_noviazgos:"",
                cod_mejor_amigo:"",
                obs_mejor_amigo:"",
                cod_act_deportiva:"",
                obs_actividades_deportivas:"",
                cod_act_artistica:"",
                obs_actividades_artisticas:"",
                obs_religion:"",
                cod_problema_emocional:"",
                obs_ayudas:""
            };
            swal.fire({
                title: 'Registro actualizado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_personales();
        }
        );
        
    }

    pass_code(id, codigo_convive, obs_residencias, cod_relaciones_sociales, cod_relaciones_amistosas, obs_relaciones_amistosas, obs_noviazgos, cod_mejor_amigo, obs_mejor_amigo, cod_act_deportiva, obs_actividades_deportivas, cod_act_artistica, obs_actividades_artisticas, obs_religion, cod_problema_emocional, obs_ayudas) {
        this.id = id;
        this.codigo_convive = codigo_convive;
        this.obs_residencias = obs_residencias;
        this.cod_relaciones_sociales = cod_relaciones_sociales;
        this.cod_relaciones_amistosas = cod_relaciones_amistosas;
        this.obs_relaciones_amistosas = obs_relaciones_amistosas;
        this.obs_noviazgos = obs_noviazgos;
        this.cod_mejor_amigo = cod_mejor_amigo;
        this.obs_mejor_amigo = obs_mejor_amigo;
        this.cod_act_deportiva = cod_act_deportiva;
        this.obs_actividades_deportivas = obs_actividades_deportivas;
        this.cod_act_artistica = cod_act_artistica;
        this.obs_actividades_artisticas = obs_actividades_artisticas;
        this.obs_religion = obs_religion;
        this.cod_problema_emocional = cod_problema_emocional;
        this.obs_ayudas = obs_ayudas;
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
        this.router.navigateByUrl('/departamentos');
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
        this.router.navigateByUrl('/principal');
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