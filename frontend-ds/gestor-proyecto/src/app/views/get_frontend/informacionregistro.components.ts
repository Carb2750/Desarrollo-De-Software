import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { timer } from 'rxjs';
import * as moment from 'moment';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js'

@Component({
    selector: 'demo4',
    template:`
        <h2>Hi, demo !!</h2>
    `
})

export class YellowBullet
{
    static codigo_expediente: number = 0;
    get codigo_expediente(): number { return YellowBullet.codigo_expediente; }
    set codigo_expediente(val: number) { YellowBullet.codigo_expediente = val; }
}

@Component({
    selector: 'get_frontend',
    templateUrl: './informacionregistro.components.html'
})
export class InformacionRegistroComponent implements OnInit{
    
    downloadpdf(){
        var a = document.getElementById("nombres").textContent;
        var b = document.getElementById("naci").textContent;
        var c = document.getElementById("proce").textContent;
        var d = document.getElementById("resi").textContent;
        var e = document.getElementById("fecha").textContent;
        var f = document.getElementById("nomp").textContent;
        var g = document.getElementById("telp").textContent;
        var h = document.getElementById("ocupp").textContent;
        var i = document.getElementById("nomm").textContent;
        var j = document.getElementById("telm").textContent;
        var k = document.getElementById("ocupm").textContent;
        var l = document.getElementById("motivos").textContent;
        var m = document.getElementById("sexto").textContent;
        var n = document.getElementById("ubicacion").textContent;
        var o = document.getElementById("escuela").textContent;
        var p = document.getElementById("rendimiento").textContent;
        var q = document.getElementById("dificultad").textContent;
        var r = document.getElementById("facilidad").textContent; 
        var s = document.getElementById("estudio").textContent; 
        var t = document.getElementById("estudiante").textContent; 
        var u = document.getElementById("repro").textContent; 
        var v = document.getElementById("repor").textContent; 
        var w = document.getElementById("expu").textContent; 
        var x = document.getElementById("vive").textContent; 
        var y = document.getElementById("otro1").textContent; 
        var z = document.getElementById("rs").textContent;
        var ab = document.getElementById("ra").textContent; 
        var cd = document.getElementById("por").textContent; 
        var ef = document.getElementById("noviazgo").textContent; 
        var gh = document.getElementById("ma").textContent; 
        var ij = document.getElementById("amigo").textContent; 
        var kl = document.getElementById("deporte").textContent; 
        var mn = document.getElementById("otro2").textContent; 
        var op = document.getElementById("arte").textContent; 
        var qr = document.getElementById("otro3").textContent; 
        var st = document.getElementById("rel").textContent; 
        var uv = document.getElementById("emo").textContent; 
        var wx = document.getElementById("ayuda").textContent; 
        var yz;
        var abc;
        if(document.getElementById("aver")==null){
            abc = "";
        }else{
            abc = document.getElementById("aver").textContent; 
        }
        if(document.getElementById("alumnotrastorno")==null){
            yz = "";
        }else{
            yz = document.getElementById("alumnotrastorno").textContent; 
        }
        var part1,part2;
        var valor1,valor2,valor3,valor4;
        var value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11;
        var value12,value13,value14,value15,value16,value17,value18,value19,value20,value21;
        var aver = [];
        var aver2 = [];
        if(l.length>49){
            part1 = l.slice(0,49);
            part2 = l.slice(49);
        }else{
            part1 = l;
            part2 = "";
        }
        if(abc.match('Peligro de muerte')){
            aver[0] = 'Peligro de muerte';
        }else{
            aver[0]="";
        }
        if(abc.match('Situación de pánico')){
            aver[1] = 'Situación de pánico';
        }else{
            aver[1]="";
        }
        if(abc.match('Algún tipo de abuso')){
            aver[2] = 'Algún tipo de abuso';
        }else{
            aver[2]="";
        }
        if(abc.match('Físicos fuertes')){
            aver[3] = 'Físicos fuertes';
        }else{
            aver[3]="";
        }
        if(abc.match('Castigos traumáticos')){
            aver[4] = 'Castigos traumáticos';
        }else{
            aver[4]="";
        }
        if(yz.match('Ideas suicidas')){
            aver2[0]='Ideas suicidas';
        }else{
            aver2[0]="";
        }
        if(yz.match('Taquicardia')){
            aver2[1]='Taquicardia';
        }else{
            aver2[1]="";
        }
        if(yz.match('Bajo rendimiento académico')){
            aver2[2]='Bajo rendimiento académico';
        }else{
            aver2[2]="";
        }
        if(yz.match('Alteraciones menstruales')){
            aver2[3]='Alteraciones menstruales';
        }else{
            aver2[3]="";
        }
        if(yz.match('Adicciones a cigarro - alcohol')){
            aver2[4]='Adicciones a cigarro - alcohol';
        }else{
            aver2[4]="";
        }
        if(yz.match('Otras drogas')){
            aver2[5]='Otras drogas';
        }else{
            aver2[5]="";
        }
        if(yz.match('Enfermedades psiquiátricas')){
            aver2[6]='Enfermedades psiquiátricas';
        }else{
            aver2[6]="";
        }
        if(yz.match('Vómitos')){
            aver2[7]='Vómitos';
        }else{
            aver2[7]="";
        }
        if(yz.match('Trastornos de conciencia')){
            aver2[8]='Trastornos de conciencia';
        }else{
            aver2[8]="";
        }
        if(yz.match('Insomnio')){
            aver2[9]='Insomnio';
        }else{
            aver2[9]="";
        }
        if(yz.match('Trastornos alimenticios')){
            aver2[10]='Trastornos alimenticios';
        }else{
            aver2[10]="";
        }
        if(yz.match('Desmayos')){
            aver2[11]='Desmayos';
        }else{
            aver2[11]="";
        }
        if(yz.match('Trastornos de memoria')){
            aver2[12]='Trastornos de memoria';
        }else{
            aver2[12]="";
        }
        if(yz.match('Problemas de concentración')){
            aver2[13]='Problemas de concentración';
        }else{
            aver2[13]="";
        }
        if(yz.match('Pesadillas')){
            aver2[14]='Pesadillas';
        }else{
            aver2[14]="";
        }
        if(yz.match('Cefaleas, dolor de cabeza')){
            aver2[15]='Cefaleas, dolor de cabeza';
        }else{
            aver2[15]="";
        }
        if(yz.match('Indisciplina')){
            aver2[16]='Indisciplina';
        }else{
            aver2[16]="";
        }
        if(yz.match('Mareos')){
            aver2[17]='Mareos';
        }else{
            aver2[17]="";
        }
        if(yz.match('Sudoración')){
            aver2[18]='Sudoración';
        }else{
            aver2[18]="";
        }
        if(yz.match('Falta de atención')){
            aver2[19]='Falta de atención';
        }else{
            aver2[19]="";
        }
        if(yz.match('Depresión')){
            aver2[20]='Depresión';
        }else{
            aver2[20]="";
        }
        if(yz.match('Uso de violencia')){
            aver2[21]='Uso de violencia';
        }else{
            aver2[21]="";
        }
        var pdf = new jsPDF("p", "mm", "A4");
        pdf.setFontSize(12);
        pdf.setFont("times");
        pdf.setFontType("italic");
        pdf.text("Instituto Tecnólogico de Administración de Empresas", 108, 25, 'center');
        pdf.text("INTAE", 101, 33);
        pdf.text("Departamento de Orientación", 82, 41);
        pdf.setFontType("bolditalic");
        pdf.text("Registro Estudiantil",90,49);
        pdf.text("I. Datos Generales",25.4,65);
        pdf.setFontType("normal");
        pdf.text(a,60.4,72);
        pdf.text("Nombre del alumno:___________________________________________________________",25.4,72);
        pdf.text(b,49.4,82);
        pdf.text(c,113.4,82);
        pdf.text("Nacionalidad:___________  Lugar de procedencia:__________________________________", 25.4, 82);
        pdf.text(d,56.4,92);
        pdf.text("Residencia actual:_____________________________________________________________",25.4,92);
        pdf.text(e,77.4,102);
        pdf.text("Fecha de apertura del registro:___________________________________________________",25.4,102);
        pdf.text(f,58.4,112);
        pdf.text(g,161.4,112);
        pdf.text("Nombre del padre:_____________________________________________ Tel.:____________",25.4,112);
        pdf.text(h,45.4,122);
        pdf.text("Ocupación:__________________________________________________________________",25.4,122);
        pdf.text(i,61.4,132);
        pdf.text(j,161.4,132);
        pdf.text("Nombre de la madre:___________________________________________ Tel.:____________",25.4,132);
        pdf.text(k,45.4,142);
        pdf.text("Ocupación:__________________________________________________________________",25.4,142);
        pdf.setFontType("bolditalic");
        pdf.text("II. Aspectos Pedagógicos",25.4,162);
        pdf.setFontType("normal");
        pdf.text("Motivos para elegir esta institución:",25.4,172);
        pdf.text(part1,25.4,182);
        pdf.text("____________________________________________________________________________",25.4,182);
        pdf.text(part2,25.4,192);
        pdf.text("____________________________________________________________________________",25.4,192);
        pdf.text(m,108.4,202);
        pdf.text("1. Centro educativo donde curso su sexto grado:_____________________________________",25.4,202);
        pdf.text(n,44.4,212);
        pdf.text("Ubicación:____________________________________________________________________",25.4,212);
        pdf.text(o,57.4,222);
        pdf.text("2. Tipo de escuela:_____________________________________________________________",25.4,222);
        pdf.text(p,72.4,232);
        pdf.text("3. Rendimiento académico:______________________________________________________",25.4,232);
        pdf.text(q,101.4,242);
        pdf.text("4. Asignatura que presenta mayor dificultad:________________________________________",25.4,242);
        pdf.text(r,87.4,252);
        pdf.text("5. Asignatura que se le facilita más:_______________________________________________",25.4,252);
        pdf.addPage();
        pdf.text("7. Ha reprobado ó repetido algún grado o curso:",25.4,25);
        pdf.text(u,25.4,35);
        pdf.text("____________________________________________________________________________",25.4,35);
        pdf.text(s,84.4,45);
        pdf.text("8. ¿Cómo es su forma de estudio?:________________________________________________",25.4,45);
        pdf.text(t,86.4,55);
        pdf.text("9. Usted se considera un estudiante:_______________________________________________",25.4,55);
        pdf.text("10. En los años anteriores ha sido reportado (a) por algún acto de disciplina:",25.4,65);
        pdf.text(v,25.4,75);
        pdf.text("____________________________________________________________________________",25.4,75);
        pdf.text("11. Ha sido expulsado de un Centro Educativo:",25.4,85);
        pdf.text(w,25.4,95);
        pdf.text("____________________________________________________________________________",25.4,95);
        pdf.setFontType("bolditalic");
        pdf.text("III. Aspecto Personal y Social",25.4,125);
        pdf.setFontType("normal");
        pdf.text(x,69.4,135);
        pdf.text("1. Actualmente vive con:________________________________________________________",25.4,135);
        pdf.text(y,47.4,145);
        pdf.text("Especifique:__________________________________________________________________",25.4,145);
        pdf.text(z,105.4,155);
        pdf.text("2.Como se considera en las relaciones sociales:______________________________________",25.4,155);
        pdf.text(ab,148.4,165);
        pdf.text("3.Situación actual de las relaciones amistosas con las personas que vive:__________________",25.4,165);
        pdf.text(cd,39.4,175);
        pdf.text("Porque:______________________________________________________________________",25.4,175);
        pdf.text(ef,51.4,185);
        pdf.text("4. Tiene novio:________________________________________________________________",25.4,185);
        pdf.text(gh,105.4,195);
        pdf.text("5. En la actualidad quien es su mejor amigo(a):______________________________________",25.4,195);
        pdf.text(ij,47.4,205);
        pdf.text("Especifique:__________________________________________________________________",25.4,205);
        pdf.text(kl,90.4,215);
        pdf.text("6. ¿Qué actividad deportiva le gusta?:______________________________________________",25.4,215);
        pdf.text(mn,47.4,225);
        pdf.text("Especifique:__________________________________________________________________",25.4,225);
        pdf.text(op,99.4,235);
        pdf.text("7. ¿Participa en alguna actividad artística?:__________________________________________",25.4,235);
        pdf.text(qr,47.4,245);
        pdf.text("Especifique:__________________________________________________________________",25.4,245);
        pdf.addPage();
        pdf.text(st,67.4,25);
        pdf.text("8. Religion que practica:________________________________________________________",25.4,25);
        pdf.text(uv,107.4,35);
        pdf.text("9. Ha vivido o vives algún problema emocional:_____________________________________",25.4,35);
        pdf.text(wx,101.4,45);
        pdf.text("10. A quien acude cuando tienes problemas:________________________________________",25.4,45);
        pdf.setFontType("bolditalic");
        pdf.text("IV. Trastornos Sintomáticos",25.4,75);
        pdf.setFontType("normal");
        pdf.text("1. A presentado alguno de estos problemas:",25.4,85);
        pdf.text("2. Antecedentes de experiencias psicológicas traumáticas:",25.4,205);
        for(var conta=0;conta<aver.length;conta++){
            if(aver[conta]!=""){
                pdf.text(aver[conta],25.4,215);
                valor1=conta;
                break;
            }
        }
        for(var conta=0;conta<aver.length;conta++){
            if(conta==valor1){
                conta++;
            }
            if(aver[conta]!=""){
                pdf.text(aver[conta],25.4,225);
                valor2=conta;
                break;
            }
        }
        for(var conta=0;conta<aver.length;conta++){
            if(conta==valor1){
                conta++;
            }
            if(conta==valor2){
                conta++;
            }
            if(aver[conta]!=""){
                pdf.text(aver[conta],25.4,235);
                valor3=conta;
                break;
            }
        }
        for(var conta=0;conta<aver.length;conta++){
            if(conta==valor1){
                conta++;
            }
            if(conta==valor2){
                conta++;
            }
            if(conta==valor3){
                conta++;
            }
            if(aver[conta]!=""){
                pdf.text(aver[conta],95.4,215);
                valor4=conta;
                break;
            }
        }
        for(var conta=0;conta<aver.length;conta++){
            if(conta==valor1){
                conta++;
            }
            if(conta==valor2){
                conta++;
            }
            if(conta==valor3){
                conta++;
            }
            if(conta==valor4){
                conta++;
            }
            if(aver[conta]!=""){
                pdf.text(aver[conta],95.4,225);
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,95);
                value1=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,105);
                value2=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,115);
                value3=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,125);
                value4=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,135);
                value5=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,145);
                value6=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,155);
                value7=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,165);
                value8=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,175);
                value9=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,185);
                value10=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],25.4,195);
                value11=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,95);
                value12=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,105);
                value13=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,115);
                value14=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,125);
                value15=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,135);
                value16=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(conta==value16){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,145);
                value17=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(conta==value16){
                conta++;
            }
            if(conta==value17){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,155);
                value18=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(conta==value16){
                conta++;
            }
            if(conta==value17){
                conta++;
            }
            if(conta==value18){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,165);
                value19=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(conta==value16){
                conta++;
            }
            if(conta==value17){
                conta++;
            }
            if(conta==value18){
                conta++;
            }
            if(conta==value19){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,175);
                value20=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(conta==value16){
                conta++;
            }
            if(conta==value17){
                conta++;
            }
            if(conta==value18){
                conta++;
            }
            if(conta==value19){
                conta++;
            }
            if(conta==value20){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,185);
                value21=conta;
                break;
            }
        }
        for(var conta=0;conta<aver2.length;conta++){
            if(conta==value1){
                conta++;
            }
            if(conta==value2){
                conta++;
            }
            if(conta==value3){
                conta++;
            }
            if(conta==value4){
                conta++;
            }
            if(conta==value5){
                conta++;
            }
            if(conta==value6){
                conta++;
            }
            if(conta==value7){
                conta++;
            }
            if(conta==value8){
                conta++;
            }
            if(conta==value9){
                conta++;
            }
            if(conta==value10){
                conta++;
            }
            if(conta==value11){
                conta++;
            }
            if(conta==value12){
                conta++;
            }
            if(conta==value13){
                conta++;
            }
            if(conta==value14){
                conta++;
            }
            if(conta==value15){
                conta++;
            }
            if(conta==value16){
                conta++;
            }
            if(conta==value17){
                conta++;
            }
            if(conta==value18){
                conta++;
            }
            if(conta==value19){
                conta++;
            }
            if(conta==value20){
                conta++;
            }
            if(conta==value21){
                conta++;
            }
            if(aver2[conta]!=""){
                pdf.text(aver2[conta],95.4,195);
                
                break;
            }
        }


        pdf.save("Registro_Alumno_"+this.alumno.id_alumno+".pdf");
        
    }

    constructor(public service:AppService, private router:Router) {
        this.listado_alumno = [];
        this.listado_trastornos = [];
        this.listado_registro = [];
        this.listado_detalle = [];
        this.listado_detalle2 = [];
        this.fecha_expediente = [];
    }

    public listado_alumno:any[];
    public listado_trastornos:any[];
    public listado_registro:any[];
    public listado_detalle:any[];
    public listado_detalle2:any[];
    public fecha_expediente:any[];


    public alumno = {
        id_alumno:""
    }


    ngOnInit(){
        this.get_codigos_alumnos();
    }

    get_codigos_alumnos() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                this.listado_alumno = [];
            },
            () => {
                this.listado_alumno = response;
                
            }
        )
    }

    get_registro() {
        var response,response2;
        var registro = new YellowBullet();
        var load = {
            codigo_expediente:Number()
        };
        var contador = 0, contador2 = 0;
        this.service.get_registrocompleto(this.alumno).subscribe(
            data => response = data,
            err => {
                this.listado_registro = [];
            },
            () => {
                this.listado_registro = response;
                registro.codigo_expediente=response[0].codigo_expediente;
                load.codigo_expediente = registro.codigo_expediente;
                const stringValue = response[0].fecha_expediente;
                let date = moment.utc(stringValue).local();
                this.fecha_expediente[0]=date.format('YYYY-MM-DD');
                response[0].fecha_expediente=this.fecha_expediente[0];
                this.service.get_completealumnotrastornos(load).subscribe(
                    data => response2 = data,
                    err => {
                        this.listado_trastornos = [];
                        this.listado_detalle = [];
                        this.listado_detalle2 = [];
                        contador = 0;
                        contador2 = 0;
                    },
                    () => {
                        this.listado_trastornos = response2;
                        for(var x = 0; x<response2.length; x++){
                            if(response2[x].codigo_trans>22){
                                this.toggleShow3();
                                this.listado_detalle[contador]=response2[x];
                                contador++;
                            }else{
                                this.listado_detalle2[contador2]=response2[x];
                                this.isShown3 = false;
                                this.isShown4 = false;
                                contador2++;
                            }
                        }
                    }
                );
                contador = 0;
                contador2 = 0;
                this.listado_detalle = [];
                this.listado_detalle2 = [];
            }
        );
    }

    
    isShown: boolean = false ; 
    isShown2: boolean = false;
    isShown3: boolean = false; 
    isShown4: boolean = false;
    toggleShow() {
        this.isShown = ! this.isShown;
        this.isShown2 = ! this.isShown2;
    }
    toggleShow2(){
        this.isShown = ! this.isShown;
        this.isShown2 = !this.isShown2;
    }
    toggleShow3(){
        this.isShown3 = true;
        this.isShown4 = true;
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