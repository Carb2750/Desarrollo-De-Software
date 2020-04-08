import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';
import { timer } from 'rxjs';
import * as moment from 'moment';

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
    
    

    constructor(public service:AppService) {
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

    
    isShown: boolean = false ; // hidden by default
    isShown3: boolean = false; // hidden by default
    isShown4: boolean = false;
    toggleShow() {
        this.isShown = ! this.isShown;
        
    }
    toggleShow2(){
        this.isShown = ! this.isShown;
    }
    toggleShow3(){
        this.isShown3 = true;
        this.isShown4 = true;
    }

}