import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';
import { timer } from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'demo3',
    template:`
        <h2>Hi, demo !!</h2>
    `
})

export class BlueBullet
{
    static num_ficha: number = 0;
    get num_ficha(): number { return BlueBullet.num_ficha; }
    set num_ficha(val: number) { BlueBullet.num_ficha = val; }
}

@Component({
    selector: 'get_frontend',
    templateUrl: './informacionficha.components.html'
})
export class InformacionFichaComponent implements OnInit{
    
    

    constructor(public service:AppService) {
        this.listado_alumno = [];
        this.listado_documentos = [];
        this.listado_registro = [];
        this.fecha_nacimiento1 = [];
    }

    public listado_alumno:any[];
    public listado_documentos:any[];
    public listado_registro:any[];
    public fecha_nacimiento1:any[];


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

    get_ficha() {
        var response,response2;
        var ficha = new BlueBullet();
        var load = {
            num_ficha:Number()
        };
        this.service.get_fichacompleta(this.alumno).subscribe(
            data => response = data,
            err => {
                this.listado_registro = [];
            },
            () => {
                this.listado_registro = response;
                ficha.num_ficha=response[0].num_ficha;
                load.num_ficha = ficha.num_ficha;
                const stringValue = response[0].fecha_nacimiento;
                let date = moment.utc(stringValue).local();
                this.fecha_nacimiento1[0]=date.format('YYYY-MM-DD');
                response[0].fecha_nacimiento=this.fecha_nacimiento1[0];
                this.service.get_completefichadoc(load).subscribe(
                    data => response2 = data,
                    err => {
                        this.listado_documentos = [];
                    },
                    () => {
                        this.listado_documentos = response2;
                    }
                );
            }
        );
    }

    
    isShown: boolean = false ; // hidden by default
    toggleShow() {
        this.isShown = ! this.isShown;
        
    }
    toggleShow2(){
        this.isShown = ! this.isShown;
    }

}