import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';



@Component({
    selector: 'demo',
    template:`
        <h2>Hi, demo !!</h2>
    `
})

export class GreenBullet
{
    static codigo_expediente:number = 0;
    static cod_aspectos_personal: number = 0;
    static aspectos_pedagogicos: number = 0;
    static codigo_ficha: number = 0;
    get codigo_expediente(): number { return GreenBullet.codigo_expediente; }
    set codigo_expediente(val: number) { GreenBullet.codigo_expediente = val; }
    get cod_aspectos_personal(): number { return GreenBullet.cod_aspectos_personal; }
    set cod_aspectos_personal(val: number) { GreenBullet.cod_aspectos_personal = val; }
    get aspectos_pedagogicos(): number { return GreenBullet.aspectos_pedagogicos; }
    set aspectos_pedagogicos(val: number) { GreenBullet.aspectos_pedagogicos = val; }
    get codigo_ficha(): number { return GreenBullet.codigo_ficha; }
    set codigo_ficha(val: number) { GreenBullet.codigo_ficha = val; }
}

@Component({
    selector: 'get_frontend',
    templateUrl: './formulario.components.html'
})
export class FormularioComponent implements OnInit{
    
    

    constructor(public service:AppService) {
        this.listado_alumno = [];
        this.listado_fichas = [];
        this.listado_personales = [];
        this.listado_pedagogicos = [];
    }

    

    

    public listado_fichas:any[];
    public listado_alumno:any[];
    public listado_personales:Object[];
    public listado_pedagogicos:any[];
    public listado_codigo_curso: any[];
    public listado_codigo_seccion: any[];
    public listado_codigo_modalidad: any[];
    public listado_codigo_jornada: any[];
    public listado_codigo_ciudad: any[];
    public listado_codigo_convive: any[];
    public listado_codigo_sociales: any[];
    public listado_codigo_amistosa: any[];
    public listado_codigo_amigos: any[];
    public listado_codigo_deportes: any[];
    public listado_codigo_artes: any[];
    public listado_codigo_problemas: any[];
    public listado_codigo: any[];
    public listado_rendimiento: any[];
    public listado_dificultad: any[];
    public listado_facilidad: any[];
    public listado_estudio: any[];
    public listado_consideracion: any[];
    public puta;

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

    public ficha = {
        cod_curso:"",
        cod_seccion:"",
        cod_modalidad:"",
        cod_jornada:"",
        cod_ciudad:"",
        anio:"",
        obs_inst_proced:"",
        indice_acad:"",
        obs_repite_curso:"",
        obs_materia_restrada:"",
        obs_beca:"",
        contacto_emergencia:"",
        num_emergencia:"",
        observaciones:""
    }

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

    public pedagogico = {
        motivos:"",
        sexto_grado_cursado:"",
        ubicacion_centro_anterior:"",
        codigo_escuela:"",
        codigo_rendimiento:"",
        cod_asignatura_dificultad:"",
        cod_asignatura_facilidad:"",
        codigo_estudio:"",
        cod_consideracion:"",
        obs_reportes:"",
        obs_expulsion:"",
        obs_reprobado:""
    }

    public detalletrans = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }

    public detalletrans2 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans3 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans4 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans5 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans6 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans7 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans8 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans9 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans10 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans11 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans12 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans13 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans14 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans15 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans16 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans17 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans18 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans19 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans20 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }
    public detalletrans21 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }

    public detalletrans22 = {
        codigo_expediente:Number(""),
        codigo_trans:""
    }

    public fichadocumento = {
        num_ficha:Number(""),
        tipo_documento:""
    }

    public fichadocumento2 = {
        num_ficha:Number(""),
        tipo_documento:""
    }
    public fichadocumento4 = {
        num_ficha:Number(""),
        tipo_documento:""
    }
    public fichadocumento5 = {
        num_ficha:Number(""),
        tipo_documento:""
    }
    public fichadocumento6 = {
        num_ficha:Number(""),
        tipo_documento:""
    }
    public fichadocumento7 = {
        num_ficha:Number(""),
        tipo_documento:""
    }
    public fichadocumento8 = {
        num_ficha:Number(""),
        tipo_documento:""
    }

    revisar1(){
        var element = <HTMLInputElement> document.getElementById("is");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar2(){
        var element = <HTMLInputElement> document.getElementById("taq");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar3(){
        var element = <HTMLInputElement> document.getElementById("bajo");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar4(){
        var element = <HTMLInputElement> document.getElementById("alt");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;

        
    }

    revisar5(){
        var element = <HTMLInputElement> document.getElementById("cig");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar6(){
        var element = <HTMLInputElement> document.getElementById("drog");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar7(){
        var element = <HTMLInputElement> document.getElementById("psi");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar8(){
        var element = <HTMLInputElement> document.getElementById("vom");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar9(){
        var element = <HTMLInputElement> document.getElementById("con");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar10(){
        var element = <HTMLInputElement> document.getElementById("ins");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar11(){
        var element = <HTMLInputElement> document.getElementById("alim");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar12(){
        var element = <HTMLInputElement> document.getElementById("desm");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar13(){
        var element = <HTMLInputElement> document.getElementById("memoria");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar14(){
        var element = <HTMLInputElement> document.getElementById("concen");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar15(){
        var element = <HTMLInputElement> document.getElementById("pesa");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar16(){
        var element = <HTMLInputElement> document.getElementById("cefa");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar17(){
        var element = <HTMLInputElement> document.getElementById("indi");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar18(){
        var element = <HTMLInputElement> document.getElementById("mare");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar19(){
        var element = <HTMLInputElement> document.getElementById("sudo");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar20(){
        var element = <HTMLInputElement> document.getElementById("aten");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar21(){
        var element = <HTMLInputElement> document.getElementById("depre");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar22(){
        var element = <HTMLInputElement> document.getElementById("viol");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar31(){
        var element = <HTMLInputElement> document.getElementById("cv");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar32(){
        var element = <HTMLInputElement> document.getElementById("tit");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }


    revisar34(){
        var element = <HTMLInputElement> document.getElementById("diplo");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar35(){
        var element = <HTMLInputElement> document.getElementById("part");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar36(){
        var element = <HTMLInputElement> document.getElementById("pasp");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar37(){
        var element = <HTMLInputElement> document.getElementById("cali");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar38(){
        var element = <HTMLInputElement> document.getElementById("idpad");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    ngOnInit(){
        this.get_codigos_curso();
        this.get_codigos_seccion();
        this.get_codigos_modalidad();
        this.get_codigos_jornada();
        this.get_codigos_ciudad();
        this.get_codigos();
        this.get_rendimiento();
        this.get_dificultad();
        this.get_facilidad();
        this.get_estudio();
        this.get_consideracion();
        this.get_codigos_convive();
        this.get_codigos_sociales();
        this.get_codigos_amistosa();
        this.get_codigos_amigos();
        this.get_codigos_deportes();
        this.get_codigos_artes();
        this.get_codigos_problemas();
        
    }

    get_codigos_curso() {
        var response;
        this.service.get_cursos().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_curso = [];
            },
            () => {
                this.listado_codigo_curso = response;
                
            }
        )
    }


    get_codigos_seccion() {
        var response;
        this.service.get_secciones().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_seccion = [];
            },
            () => {
                this.listado_codigo_seccion = response;
                
            }
        )
    }

    get_codigos_modalidad() {
        var response;
        this.service.get_modalidades().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_modalidad = [];
            },
            () => {
                this.listado_codigo_modalidad = response;
                
            }
        )
    }

    get_codigos_jornada() {
        var response;
        this.service.get_jornadas().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_jornada = [];
            },
            () => {
                this.listado_codigo_jornada = response;
                
            }
        )
    }

    get_codigos_ciudad() {
        var response;
        this.service.get_ciudades().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_ciudad = [];
            },
            () => {
                this.listado_codigo_ciudad = response;
                
            }
        )
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
                
            }
        )
    }

    get_codigos() {
        var response;
        this.service.get_tipoescuela().subscribe(
            data => response = data,
            err => {
                this.listado_codigo = [];
            },
            () => {
                this.listado_codigo = response;
                
            }
        )
    }

    get_rendimiento() {
        var response;
        this.service.get_rendimientoacademico().subscribe(
            data => response = data,
            err => {
                this.listado_rendimiento = [];
            },
            () => {
                this.listado_rendimiento = response;
                
            }
        )
    }

    get_dificultad() {
        var response;
        this.service.get_dificultades().subscribe(
            data => response = data,
            err => {
                this.listado_dificultad = [];
            },
            () => {
                this.listado_dificultad = response;
                
            }
        )
    }

    get_facilidad() {
        var response;
        this.service.get_facilidades().subscribe(
            data => response = data,
            err => {
                this.listado_facilidad = [];
            },
            () => {
                this.listado_facilidad = response;
                
            }
        )
    }

    get_estudio() {
        var response;
        this.service.get_estudios().subscribe(
            data => response = data,
            err => {
                this.listado_estudio = [];
            },
            () => {
                this.listado_estudio = response;
                
            }
        )
    }

    get_consideracion() {
        var response;
        this.service.get_consideraciones().subscribe(
            data => response = data,
            err => {
                this.listado_consideracion = [];
            },
            () => {
                this.listado_consideracion = response;
                
            }
        )
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

    insert_alumno() {
        var response,response1, response2,response3,response4;
        var personal = new GreenBullet();
        var pedagogico = new GreenBullet();
        var ficha = new GreenBullet();
        var expediente = new GreenBullet();
        this.service.get_ultimopersonal().subscribe(
            data => response = data,
            err => {
                this.listado_personales = [];
            },
            () => {
                this.listado_personales = response;
                personal.cod_aspectos_personal=Number(response[0].cod_aspectos_personal)+1;
                this.service.get_ultimopedagogico().subscribe(
                    data => response1 = data,
                    err => {
                        this.listado_pedagogicos = [];
                    },
                    () => {
                        this.listado_pedagogicos = response1;
                        pedagogico.aspectos_pedagogicos=Number(response1[0].aspectos_pedagogicos)+1;
                        this.service.get_ultimaficha().subscribe(
                            data => response2 = data,
                            err => {
                                this.listado_fichas = [];
                            },
                            () => {
                                this.listado_fichas = response2;
                                ficha.codigo_ficha = Number(response2[0].codigo_ficha);
                                this.service.get_ultimoexpediente().subscribe(
                                    data => response3 = data,
                                    err => {
                                        
                                    },
                                    ()=> {
                                        expediente.codigo_expediente=Number(response3[0].codigo_expediente);
                                        this.alumno.codigo_ficha=ficha.codigo_ficha;
                                        this.alumno.cod_aspectos_personal=personal.cod_aspectos_personal;
                                        this.alumno.aspectos_pedagogicos=pedagogico.aspectos_pedagogicos;
                                        this.alumno.codigo_expediente=expediente.codigo_expediente;           
                                        this.service.insert_alumno(this.alumno).subscribe(
                                            data => response4 = data,
                                            err => {
                                                console.log(response4);
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
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
            } 
        );
    }
    
    insert_ficha(){
        var response;
        this.service.insert_ficha(this.ficha).subscribe(
        data => response = data,
        err => {
            
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.ficha = {
                    cod_curso:"",
                    cod_seccion:"",
                    cod_modalidad:"",
                    cod_jornada:"",
                    cod_ciudad:"",
                    anio:"",
                    obs_inst_proced:"",
                    indice_acad:"",
                    obs_repite_curso:"",
                    obs_materia_restrada:"",
                    obs_beca:"",
                    contacto_emergencia:"",
                    num_emergencia:"",
                    observaciones:""
                }
                swal.fire({
                    title: 'Registro creado exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
        }
        );
    }

    insert_personal(){
        var response;
        
        this.service.insert_personales(this.personal).subscribe(
        data => response = data,
        err => {
            
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
        }
        );
    }

    insert_pedagogico(){
        var response;
        this.service.insert_pedagogico(this.pedagogico).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
                })
        },
        ()=> {
            this.pedagogico = {
                motivos:"",
                sexto_grado_cursado:"",
                ubicacion_centro_anterior:"",
                codigo_escuela:"",
                codigo_rendimiento:"",
                cod_asignatura_dificultad:"",
                cod_asignatura_facilidad:"",
                codigo_estudio:"",
                cod_consideracion:"",
                obs_reportes:"",
                obs_expulsion:"",
                obs_reprobado:""
                }
                swal.fire({
                    title: 'Registro creado exitosamente!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
        }
        );
    }

    insert_detalletrans(){
        var response, response1;
        var expediente = new GreenBullet();
        if(this.detalletrans.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                   
                },
                () => {
                    console.log(response);
                    expediente.codigo_expediente=Number(response[0].codigo_expediente)+1;
                    this.detalletrans.codigo_expediente = expediente.codigo_expediente;
                    this.detalletrans = {
                        codigo_expediente:expediente.codigo_expediente,
                        codigo_trans:this.detalletrans.codigo_trans
                    }
                    this.service.insert_alumnostranstornos(this.detalletrans).subscribe(
                        data => response1 = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
           
        }
        
    }


    insert_detalletrans2(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans2 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans2.codigo_trans
        }
        if(this.detalletrans2.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans2.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans2).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans2={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans3(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans3 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans3.codigo_trans
        }
        if(this.detalletrans3.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans3.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans3).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans3={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans4(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans4 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans4.codigo_trans
        }
        if(this.detalletrans4.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans4.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans4).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans4={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    
    insert_detalletrans5(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans5 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans5.codigo_trans
        }
        if(this.detalletrans5.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans5.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans5).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans5={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans6(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans6 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans6.codigo_trans
        }
        if(this.detalletrans6.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans6.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans6).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans6={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans7(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans7 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans7.codigo_trans
        }
        if(this.detalletrans7.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans7.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans7).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans7={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans8(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans8 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans8.codigo_trans
        }
        if(this.detalletrans8.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans8.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans8).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans8={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans9(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans9 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans9.codigo_trans
        }
        if(this.detalletrans9.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans9.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans9).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans9={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans10(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans10 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans10.codigo_trans
        }
        if(this.detalletrans10.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans10.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans10).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans10={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans11(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans11 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans11.codigo_trans
        }
        if(this.detalletrans11.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans11.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans11).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans11={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans12(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans12 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans12.codigo_trans
        }
        if(this.detalletrans12.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans12.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans12).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans12={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }  
        
    }

    insert_detalletrans13(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans13 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans13.codigo_trans
        }
        if(this.detalletrans13.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans13.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans13).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans13={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans14(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans14 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans14.codigo_trans
        }
        if(this.detalletrans14.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans14.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans14).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans14={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans15(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans15 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans15.codigo_trans
        }
        if(this.detalletrans15.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans15.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans15).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans15={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans16(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans16 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans16.codigo_trans
        }
        if(this.detalletrans16.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans16.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans16).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans16={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans17(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans17 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans17.codigo_trans
        }
        if(this.detalletrans17.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans17.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans17).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans17={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans18(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans18 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans18.codigo_trans
        }
        if(this.detalletrans18.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans18.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans18).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans18={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans19(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans19 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans19.codigo_trans
        }
        if(this.detalletrans19.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans19.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans19).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans19={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans20(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans20 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans20.codigo_trans
        }
        if(this.detalletrans20.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans20.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans20).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans20={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans21(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans21 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans21.codigo_trans
        }
        if(this.detalletrans21.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans21.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans21).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans21={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_detalletrans22(){
        var response;
        var alumno = new GreenBullet();
        this.detalletrans22 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans22.codigo_trans
        }
        if(this.detalletrans22.codigo_trans==null){   
        }else{
            this.service.get_ultimoexpediente().subscribe(
                data => response = data,
                err => {
                    this.listado_alumno = [];
                },
                () => {
                    this.listado_alumno = response;
                    alumno.codigo_expediente=Number(response[0].codigo_expediente);
                    this.detalletrans22.codigo_expediente = alumno.codigo_expediente;
                    this.service.insert_alumnostranstornos(this.detalletrans22).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.detalletrans22={
                                codigo_expediente:Number(""),
                                codigo_trans:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_fichadocumento(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento.tipo_documento
        }
        if(this.fichadocumento.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }


    insert_fichadocumento2(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento2 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento2.tipo_documento
        }
        if(this.fichadocumento2.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento2.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento2).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento2={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }



    insert_fichadocumento4(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento4 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento4.tipo_documento
        }
        if(this.fichadocumento4.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento4.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento4).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento4={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_fichadocumento5(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento5 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento5.tipo_documento
        }
        if(this.fichadocumento5.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento5.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento5).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento5={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_fichadocumento6(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento6 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento6.tipo_documento
        }
        if(this.fichadocumento6.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento6.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento6).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento6={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_fichadocumento7(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento7 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento7.tipo_documento
        }
        if(this.fichadocumento7.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento7.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento7).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento7={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }

    insert_fichadocumento8(){
        var response;
        var ficha = new GreenBullet();
        this.fichadocumento8 = {
            num_ficha:this.fichadocumento.num_ficha,
            tipo_documento:this.fichadocumento8.tipo_documento
        }
        if(this.fichadocumento8.tipo_documento==null){   
        }else{
            this.service.get_ultimaficha().subscribe(
                data => response = data,
                err => {
                    this.listado_fichas = [];
                },
                () => {
                    this.listado_fichas = response;
                    ficha.codigo_ficha=Number(response[0].codigo_ficha)+1;
                    this.fichadocumento8.num_ficha = ficha.codigo_ficha;
                    this.service.insert_fichadocumentos(this.fichadocumento8).subscribe(
                        data => response = data,
                        err => {
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo salio mal!',
                            })
                        },
                        ()=> {
                            this.fichadocumento8={
                                num_ficha:Number(""),
                                tipo_documento:""
                            }
                            swal.fire({
                                title: 'Datos guardados exitosamente!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                        }
                    );
                    
                }
            );
            
        }
        
    }

    isShown: boolean = true ; // hidden by default
    isShown2: boolean = false ; // hidden by default
    isShown3: boolean = false ; // hidden by default
    isShown4: boolean = false ; // hidden by default
    isShown5: boolean = true ; // hidden by default
    isShown6: boolean = false ; // hidden by default
    isShown7: boolean = false ; // hidden by default
    isShown8: boolean = false ; // hidden by default
    isShown9: boolean = false ; // hidden by default
    toggleShow() {
    window.scrollTo(0,0);
    this.isShown = ! this.isShown;
    this.isShown5 = ! this.isShown5;
    this.isShown2 = ! this.isShown2;
    this.isShown6 = ! this.isShown6;

    }

    toggleShow2() {
    window.scrollTo(0,0);
    this.isShown2 = ! this.isShown2;
    this.isShown6 = ! this.isShown6;
    this.isShown3 = ! this.isShown3;
    this.isShown7 = ! this.isShown7;

    }
    
    toggleShow3() {
    window.scrollTo(0,0);
    this.isShown3 = ! this.isShown3;
    this.isShown7 = ! this.isShown7;
    this.isShown4 = ! this.isShown4;
    this.isShown8 = ! this.isShown8;

    }

    toggleShow4() {
        window.scrollTo(0,0);
        this.isShown = ! this.isShown;
        this.isShown2 = ! this.isShown2;
        this.isShown3 = ! this.isShown3;
        this.isShown5 = false;
        this.isShown6 = false;
        this.isShown7 = false;
        this.isShown8 = ! this.isShown8;
        this.isShown9 = ! this.isShown9;
    }
}