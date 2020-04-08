import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec,HttpParameterCodec} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class AppService{
    private endPoint: string;

    constructor(private httpClient: HttpClient) {
        this.endPoint = "http://"+window.location.hostname+":8200/api"
    }

    get_usuarios():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_usuarios", {responseType: 'json'});
    }

    insert_usuario(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_usuario", load, { responseType: 'json' });
    }

    delete_usuario(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_usuario", {params:load, responseType: 'json' });
    }

    update_usuario(load, usuario):Observable<any> {
        usuario.codigo = load.codigo
        return this.httpClient.put(this.endPoint + "/update_usuario", usuario, {params: load, responseType: 'json'});
    }    

    get_ciudades():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_ciudad", {responseType: 'json'});
    }

    insert_ciudad(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_ciudad", load, { responseType: 'json' });
    }

    delete_ciudad(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_ciudad", {params:load, responseType: 'json' });
    }

    update_ciudad(load, ciudad):Observable<any> {
        ciudad.cod_ciudad = load.cod_ciudad
        return this.httpClient.put(this.endPoint + "/update_ciudad", ciudad, {params: load, responseType: 'json'});
    }


    get_deportes():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_deporte", {responseType: 'json'});
    }

    insert_deporte(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_deporte", load, { responseType: 'json' });
    }

    delete_deporte(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_deporte", {params:load, responseType: 'json' });
    }

    update_deporte(load, deporte):Observable<any> {
        deporte.cod_act_deportiva = load.cod_act_deportiva
        return this.httpClient.put(this.endPoint + "/update_deporte", deporte, {params: load, responseType: 'json'});
    }

    get_artes():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_arte", {responseType: 'json'});
    }

    insert_arte(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_arte", load, { responseType: 'json' });
    }

    delete_arte(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_arte", {params:load, responseType: 'json' });
    }

    update_arte(load, arte):Observable<any> {
        arte.cod_act_artistica = load.cod_act_artistica
        return this.httpClient.put(this.endPoint + "/update_arte", arte, {params: load, responseType: 'json'});
    }




    get_cursos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_cursos", {responseType: 'json'});
    }

    insert_curso(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_curso", load, { responseType: 'json' });
    }

    delete_curso(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_curso", {params:load, responseType: 'json' });
    }

    update_curso(load, curso):Observable<any> {
        curso.cod_curso = load.cod_curso
        return this.httpClient.put(this.endPoint + "/update_curso", curso, {params: load, responseType: 'json'});
    }

    get_jornadas():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_jornada", {responseType: 'json'});
    }

    insert_jornada(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_jornada", load, { responseType: 'json' });
    }

    delete_jornada(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_jornada", {params:load, responseType: 'json' });
    }

    update_jornada(load, jornada):Observable<any> {
        jornada.cod_jornada = load.cod_jornada
        return this.httpClient.put(this.endPoint + "/update_jornada", jornada, {params: load, responseType: 'json'});
    }

    get_amigos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_mejoramigo", {responseType: 'json'});
    }

    insert_amigo(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_mejoramigo", load, { responseType: 'json' });
    }

    delete_amigo(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_mejoramigo", {params:load, responseType: 'json' });
    }

    update_amigo(load, amigo):Observable<any> {
        amigo.cod_mejor_amigo = load.cod_mejor_amigo
        return this.httpClient.put(this.endPoint + "/update_mejoramigo", amigo, {params: load, responseType: 'json'});
    }

    

    get_secciones():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_secciones", {responseType: 'json'});
    }

    insert_seccion(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_seccion", load, { responseType: 'json' });
    }

    delete_seccion(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_seccion", {params:load, responseType: 'json' });
    }

    update_seccion(load, seccion):Observable<any> {
        seccion.cod_seccion = load.cod_seccion
        console.log("sADasdsa: " + seccion.desc_seccion);
        return this.httpClient.put(this.endPoint + "/update_seccion", seccion, {params: load, responseType: 'json'});
    }
    

    get_dificultades():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_asignaturadificultad", {responseType: 'json'});
    }

    insert_dificultad(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_asignaturadificultad", load, { responseType: 'json' });
    }

    delete_dificultad(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_asignaturadificultad", {params:load, responseType: 'json' });
    }

    update_dificultad(load, dificultad):Observable<any> {
        dificultad.cod_asignatura_dificultad = load.cod_asignatura_dificultad
        return this.httpClient.put(this.endPoint + "/update_asignaturadificultad", dificultad, {params: load, responseType: 'json'});
    }

    get_facilidades():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_asignaturafacilidad", {responseType: 'json'});
    }

    insert_facilidad(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_asignaturafacilidad", load, { responseType: 'json' });
    }

    delete_facilidad(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_asignaturafacilidad", {params:load, responseType: 'json' });
    }

    update_facilidad(load, facilidad):Observable<any> {
        facilidad.cod_asignatura_facilidad = load.cod_asignatura_facilidad
        return this.httpClient.put(this.endPoint + "/update_asignaturafacilidad", facilidad, {params: load, responseType: 'json'});
    }

    get_consideraciones():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_consideracion", {responseType: 'json'});
    }

    insert_consideracion(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_consideracion", load, { responseType: 'json' });
    }

    delete_consideracion(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_consideracion", {params:load, responseType: 'json' });
    }

    update_consideracion(load, consideracion):Observable<any> {
        consideracion.cod_consideracion = load.cod_consideracion
        return this.httpClient.put(this.endPoint + "/update_consideracion", consideracion, {params: load, responseType: 'json'});
    }

    get_estudios():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_estudioconstante", {responseType: 'json'});
    }

    insert_estudio(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_estudioconstante", load, { responseType: 'json' });
    }

    delete_estudio(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_estudioconstante", {params:load, responseType: 'json' });
    }

    update_estudio(load, estudio):Observable<any> {
        estudio.codigo_estudio = load.codigo_estudio
        return this.httpClient.put(this.endPoint + "/update_estudioconstante", estudio, {params: load, responseType: 'json'});
    }

    get_documentos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_documentos", {responseType: 'json'});
    }

    insert_documento(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_documentos", load, { responseType: 'json' });
    }

    delete_documento(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_documentos", {params:load, responseType: 'json' });
    }

    update_documento(load, documento):Observable<any> {
        documento.tipo_documento = load.tipo_documento
        return this.httpClient.put(this.endPoint + "/update_documentos", documento, {params: load, responseType: 'json'});
    }

    get_modalidades():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_modalidad", {responseType: 'json'});
    }

    insert_modalidad(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_modalidad", load, { responseType: 'json' });
    }

    delete_modalidad(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_modalidad", {params:load, responseType: 'json' });
    }

    update_modalidad(load, modalidad):Observable<any> {
        modalidad.cod_modalidad = load.cod_modalidad
        return this.httpClient.put(this.endPoint + "/update_modalidad", modalidad, {params: load, responseType: 'json'});
    }

    get_emocionales():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_problemaemocional", {responseType: 'json'});
    }

    insert_emocional(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_problemaemocional", load, { responseType: 'json' });
    }

    delete_emocional(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_problemaemocional", {params:load, responseType: 'json' });
    }

    update_emocional(load, emocional):Observable<any> {
        emocional.cod_problema_emocional = load.cod_problema_emocional
        return this.httpClient.put(this.endPoint + "/update_problemaemocional", emocional, {params: load, responseType: 'json'});
    }


    get_relacionamistosa():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_relacionamistosa", {responseType: 'json'});
    }

    insert_relacionamistosa(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_relacionamistosa", load, { responseType: 'json' });
    }

    delete_relacionamistosa(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_relacionamistosa", {params:load, responseType: 'json' });
    }

    update_relacionamistosa(load, amistad):Observable<any> {
        amistad.cod_relaciones_amistosas = load.cod_relaciones_amistosas
        return this.httpClient.put(this.endPoint + "/update_relacionamistosa", amistad, {params: load, responseType: 'json'});
    }

    get_relacionsocial():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_relacionsocial", {responseType: 'json'});
    }

    insert_relacionsocial(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_relacionsocial", load, { responseType: 'json' });
    }

    delete_relacionsocial(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_relacionsocial", {params:load, responseType: 'json' });
    }

    update_relacionsocial(load, amistad):Observable<any> {
        amistad.cod_relaciones_sociales = load.cod_relaciones_sociales
        return this.httpClient.put(this.endPoint + "/update_relacionsocial", amistad, {params: load, responseType: 'json'});
    }

    get_rendimientoacademico():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_rendimientoacademico", {responseType: 'json'});
    }

    insert_rendimientoacademico(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_rendimientoacademico", load, { responseType: 'json' });
    }

    delete_rendimientoacademico(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_rendimientoacademico", {params:load, responseType: 'json' });
    }

    update_rendimientoacademico(load, rendimiento):Observable<any> {
        rendimiento.codigo_rendimiento = load.codigo_rendimiento
        return this.httpClient.put(this.endPoint + "/update_rendimientoacademico", rendimiento, {params: load, responseType: 'json'});
    }


    get_tipoescuela():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_tipoescuela", {responseType: 'json'});
    }

    insert_tipoescuela(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_tipoescuela", load, { responseType: 'json' });
    }

    delete_tipoescuela(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_tipoescuela", {params:load, responseType: 'json' });
    }

    update_tipoescuela(load, escuela):Observable<any> {
        escuela.codigo_escuela = load.codigo_escuela
        return this.httpClient.put(this.endPoint + "/update_tipoescuela", escuela, {params: load, responseType: 'json'});
    }

    
    get_convive():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_convive", {responseType: 'json'});
    }

    insert_convive(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_convive", load, { responseType: 'json' });
    }

    delete_convive(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_convive", {params:load, responseType: 'json' });
    }

    update_convive(load, convive):Observable<any> {
        convive.codigo_convive = load.codigo_convive
        return this.httpClient.put(this.endPoint + "/update_convive", convive, {params: load, responseType: 'json'});
    }


    get_transtornos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_transtornos", {responseType: 'json'});
    }

    insert_transtornos(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_transtornos", load, { responseType: 'json' });
    }

    delete_transtornos(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_transtornos", {params:load, responseType: 'json' });
    }

    update_transtornos(load, transtorno):Observable<any> {
        transtorno.codigo_trans = load.codigo_trans
        return this.httpClient.put(this.endPoint + "/update_transtornos", transtorno, {params: load, responseType: 'json'});
    }

    get_pedagogicos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_aspectospedagogicos", {responseType: 'json'});
    }

    insert_pedagogico(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_aspectospedagogicos", load, { responseType: 'json' });
    }

    delete_pedagogico(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_aspectospedagogicos", {params:load, responseType: 'json' });
    }

    update_pedagogico(load, pedagogico):Observable<any> {
        pedagogico.codigo_pedagogicos = load.codigo_pedagogicos
        return this.httpClient.put(this.endPoint + "/update_aspectospedagogicos", pedagogico, {params: load, responseType: 'json'});
    }

    get_personales():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_aspectospersonales", {responseType: 'json'});
    }


    insert_personales(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_aspectospersonales", load, { responseType: 'json' });
    }

    delete_personales(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_aspectospersonales", {params:load, responseType: 'json' });
    }

    update_personales(load, personal):Observable<any> {
        personal.cod_aspectos_personal = load.cod_aspectos_personal
        return this.httpClient.put(this.endPoint + "/update_aspectospersonales", personal, {params: load, responseType: 'json'});
    }


    get_alumno():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_alumno", {responseType: 'json'});
    }


    insert_alumno(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_alumno", load, { responseType: 'json' });
    }

    delete_alumno(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_alumno", {params:load, responseType: 'json' });
    }

    update_alumno(load, alumno):Observable<any> {
        alumno.id_alumno = load.id_alumno
        return this.httpClient.put(this.endPoint + "/update_alumno", alumno, {params: load, responseType: 'json'});
    }

    get_ficha():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_ficha", {responseType: 'json'});
    }


    insert_ficha(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_ficha", load, { responseType: 'json' });
    }

    delete_ficha(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_ficha", {params:load, responseType: 'json' });
    }

    update_ficha(load, ficha):Observable<any> {
        ficha.num_ficha = load.num_ficha
        return this.httpClient.put(this.endPoint + "/update_ficha", ficha, {params: load, responseType: 'json'});
    }

    get_alumnostranstornos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_alumnotranstorno", {responseType: 'json'});
    }


    insert_alumnostranstornos(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_alumnotranstorno", load, { responseType: 'json' });
    }

    delete_alumnostranstornos(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_alumnotranstorno", {params:load, responseType: 'json' });
    }

    update_alumnostranstornos(load, detalle):Observable<any> {
        detalle.codigo_detalle = load.codigo_detalle
        return this.httpClient.put(this.endPoint + "/update_alumnotranstorno", detalle, {params: load, responseType: 'json'});
    }


    get_fichadocumentos():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_fichadocumentos", {responseType: 'json'});
    }


    insert_fichadocumentos(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_fichadocumentos", load, { responseType: 'json' });
    }

    delete_fichadocumentos(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_fichadocumentos", {params:load, responseType: 'json' });
    }

    update_fichadocumentos(load, detalle):Observable<any> {
        detalle.codigo_detalles = load.codigo_detalles
        return this.httpClient.put(this.endPoint + "/update_fichadocumentos", detalle, {params: load, responseType: 'json'});
    }


    get_headers(){
        var headers = new HttpHeaders({
            'Authorization':'Token' + this.get_session().token
        });
        return headers;
    }

    login(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/login", load, { responseType: 'json' });
    }

    set_session(token){
        localStorage.setItem("Intae", JSON.stringify(token));
    }

    set_usuariologueado(user){
        localStorage.setItem("loggedUser",JSON.stringify(user));
    }

    get_usuariologueado(){
        if(localStorage.getItem("loggedUser"))
        return JSON.parse(localStorage.getItem("loggedUser"));
    }

    get_session(){
        if(localStorage.getItem("Intae") && JSON.parse(localStorage.getItem("Intae")).token){
            return JSON.parse(localStorage.getItem("Intae"));
        }else{
            return false;
        }
    }

    reset_session(){
        localStorage.removeItem("Intae");
        localStorage.removeItem("loggedUser");
    }

    get_ultimopersonal():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_ultimopersonal", {responseType: 'json'});
    }

    get_ultimopedagogico():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_ultimopedagogico", {responseType: 'json'});
    }

    get_ultimoexpediente():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_ultimoexpediente", {responseType: 'json'});
    }

    get_ultimaficha():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_ultimaficha", {responseType: 'json'});
    }

    insert_expediente():Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_expediente",{ responseType: 'json' });
    }

    get_fichacompleta(load):Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_fichacompleta", {params: load, responseType: 'json'});
    }

    get_completefichadoc(load):Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_fichadocumentos2", {params: load, responseType: 'json'});
    }

    get_registrocompleto(load):Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_registrocompleto", {params: load, responseType: 'json'});
    }

    get_completealumnotrastornos(load):Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_alumnostrastornos2", {params: load, responseType: 'json'});
    }

    get_seguimiento():Observable<any>{
        return this.httpClient.get(this.endPoint + "/get_seguimiento", {responseType: 'json'});
    }


    insert_seguimiento(load):Observable<any>{
        return this.httpClient.post(this.endPoint + "/insert_seguimiento", load, { responseType: 'json' });
    }

    delete_seguimiento(load):Observable<any>{
        return this.httpClient.delete(this.endPoint + "/delete_seguimiento", {params:load, responseType: 'json' });
    }

    update_seguimiento(load, sesion):Observable<any> {
        sesion.codigo_sesion = load.codigo_sesion
        return this.httpClient.put(this.endPoint + "/update_seguimiento", sesion, {params: load, responseType: 'json'});
    }
}
