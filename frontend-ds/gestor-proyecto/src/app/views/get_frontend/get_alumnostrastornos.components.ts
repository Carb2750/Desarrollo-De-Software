import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_alumnostrastornos.html'
})

export class GetDetalletransComponent implements OnInit{
    public listado_detalles:any[];
    public listado_codigo_alumnos: any[];
    public listado_codigo_trastornos: any[];
    public valor;

    constructor(public service:AppService, private router:Router) {
        this.listado_detalles = [];
    }


     

    public id;

    public detalletrans = {
        codigo_expediente:"",
        codigo_trans:""
    }

    public detalletrans2 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans3 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans4 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans5 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans6 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans7 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans8 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans9 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans10 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans11 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans12 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans13 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans14 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans15 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans16 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans17 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans18 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans19 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans20 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans21 = {
        codigo_expediente:"",
        codigo_trans:""
    }

    public detalletrans22 = {
        codigo_expediente:"",
        codigo_trans:""
    }

    public detalletrans23 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans24 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans25 = {
        codigo_expediente:"",
        codigo_trans:""
    }
    public detalletrans26 = {
        codigo_expediente:"",
        codigo_trans:""
    }

    public detalletrans27 = {
        codigo_expediente:"",
        codigo_trans:""
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

    revisar23(){
        var element = <HTMLInputElement> document.getElementById("cast");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar24(){
        var element = <HTMLInputElement> document.getElementById("ffuertes");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar25(){
        var element = <HTMLInputElement> document.getElementById("abuso");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar26(){
        var element = <HTMLInputElement> document.getElementById("muerte");
        var isChecked = element.checked;
        if(isChecked){
            isChecked = true;
        }
        else{
            isChecked = false;
        }
        return isChecked;
    }

    revisar27(){
        var element = <HTMLInputElement> document.getElementById("panico");
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
        this.get_detalletranses();
        this.get_codigos_trastornos();
        this.get_codigos_alumnos();
    }


    get_codigos_alumnos() {
        var response;
        this.service.get_alumno().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_alumnos = [];
            },
            () => {
                this.listado_codigo_alumnos = response;
                console.log(response);
            }
        )
    }

    

    get_codigos_trastornos() {
        var response;
        this.service.get_transtornos().subscribe(
            data => response = data,
            err => {
                this.listado_codigo_trastornos = [];
            },
            () => {
                this.listado_codigo_trastornos = response;
                console.log(response);
            }
        )
    }

    get_detalletranses() {
        var response;
        this.service.get_alumnostranstornos().subscribe(
            data => response = data,
            err => {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            },
            () => {
                this.listado_detalles = response;
                console.log(response);
            }
        )
    }


    insert_detalletrans(){
        var response;
        if(this.detalletrans.codigo_trans==null){   
        }else{
            this.service.insert_alumnostranstornos(this.detalletrans).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.detalletrans={
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }


    insert_detalletrans2(){
        var response;
        this.detalletrans2 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans2.codigo_trans
        }
        if(this.detalletrans2.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans3(){
        var response;
        this.detalletrans3 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans3.codigo_trans
        }
        if(this.detalletrans3.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans4(){
        var response;
        this.detalletrans4 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans4.codigo_trans
        }
        if(this.detalletrans4.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans5(){
        var response;
        this.detalletrans5 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans5.codigo_trans
        }
        if(this.detalletrans5.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans6(){
        var response;
        this.detalletrans6 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans6.codigo_trans
        }
        if(this.detalletrans6.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans7(){
        var response;
        this.detalletrans7 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans7.codigo_trans
        }
        if(this.detalletrans7.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans8(){
        var response;
        this.detalletrans8 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans8.codigo_trans
        }
        if(this.detalletrans8.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
                );
        }
        
    }

    insert_detalletrans9(){
        var response;
        this.detalletrans9 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans9.codigo_trans
        }
        if(this.detalletrans9.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans10(){
        var response;
        this.detalletrans10 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans10.codigo_trans
        }
        if(this.detalletrans10.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans11(){
        var response;
        this.detalletrans11 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans11.codigo_trans
        }
        if(this.detalletrans11.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans12(){
        var response;
        this.detalletrans12 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans12.codigo_trans
        }
        if(this.detalletrans12.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }  
        
    }

    insert_detalletrans13(){
        var response;
        this.detalletrans13 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans13.codigo_trans
        }
        if(this.detalletrans13.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans14(){
        var response;
        this.detalletrans14 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans14.codigo_trans
        }
        if(this.detalletrans14.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans15(){
        var response;
        this.detalletrans15 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans15.codigo_trans
        }
        if(this.detalletrans15.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans16(){
        var response;
        this.detalletrans16 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans16.codigo_trans
        }
        if(this.detalletrans16.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans17(){
        var response;
        this.detalletrans17 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans17.codigo_trans
        }
        if(this.detalletrans17.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans18(){
        var response;
        this.detalletrans18 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans18.codigo_trans
        }
        if(this.detalletrans18.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans19(){
        var response;
        this.detalletrans19 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans19.codigo_trans
        }
        if(this.detalletrans19.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
                );
        }
        
    }

    insert_detalletrans20(){
        var response;
        this.detalletrans20 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans20.codigo_trans
        }
        if(this.detalletrans20.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans21(){
        var response;
        this.detalletrans21 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans21.codigo_trans
        }
        if(this.detalletrans21.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans22(){
        var response;
        this.detalletrans22 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans22.codigo_trans
        }
        if(this.detalletrans22.codigo_trans==null){   
        }else{
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
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans23(){
        var response;
        this.detalletrans23 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans23.codigo_trans
        }
        if(this.detalletrans23.codigo_trans==null){   
        }else{
            this.service.insert_alumnostranstornos(this.detalletrans23).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.detalletrans23={
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans24(){
        var response;
        this.detalletrans24 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans24.codigo_trans
        }
        if(this.detalletrans24.codigo_trans==null){   
        }else{
            this.service.insert_alumnostranstornos(this.detalletrans24).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.detalletrans24={
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans25(){
        var response;
        this.detalletrans25 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans25.codigo_trans
        }
        if(this.detalletrans25.codigo_trans==null){   
        }else{
            this.service.insert_alumnostranstornos(this.detalletrans25).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.detalletrans25={
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans26(){
        var response;
        this.detalletrans26 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans26.codigo_trans
        }
        if(this.detalletrans26.codigo_trans==null){   
        }else{
            this.service.insert_alumnostranstornos(this.detalletrans26).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.detalletrans26={
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }

    insert_detalletrans27(){
        var response;
        this.detalletrans27 = {
            codigo_expediente:this.detalletrans.codigo_expediente,
            codigo_trans:this.detalletrans27.codigo_trans
        }
        if(this.detalletrans27.codigo_trans==null){   
        }else{
            this.service.insert_alumnostranstornos(this.detalletrans27).subscribe(
                data => response = data,
                err => {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                    })
                },
                ()=> {
                    this.detalletrans27={
                        codigo_expediente:"",
                        codigo_trans:""
                    }
                    swal.fire({
                        title: 'Datos guardados exitosamente!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                this.get_detalletranses();
                }
            );
        }
        
    }


    delete_detalletrans(id){
        console.log("Registro a borrar: " + id);
        var response;
        var load={
            codigo_detalle:id
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
                this.service.delete_alumnostranstornos(load).subscribe(
                    data => response = data,
                    err => {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salio mal!',
                        })
                    },
                    ()=> {
                        this.get_detalletranses();
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




    update_detalletrans(){
        console.log("Registro a editar: " + this.id);
        var response;
        var load={
            codigo_detalle:this.id
        };
        
        console.log(load);
        this.service.update_alumnostranstornos(load, this.detalletrans).subscribe(
        data => response = data,
        err => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
        },
        ()=> {
            this.detalletrans = {
                codigo_expediente:"",
                codigo_trans:""
            };
            swal.fire({
                title: 'Datos actualizados exitosamente!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            this.get_detalletranses();
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