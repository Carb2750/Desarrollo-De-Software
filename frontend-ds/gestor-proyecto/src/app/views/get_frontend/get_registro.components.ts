import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_registro',
    templateUrl: './get_registro.components.html'
})

export class GetRegistroComponent {
    public registro:any[];
    public transtornos:any[];

    constructor(public service:AppService) {
        this.registro = [];
        this.transtornos = [];
    }

    public alumnos_datos = {
        id_alumno:""
    }

    get_ficha(id) {
        var response;
        var load={
            id_alumno:id
            }
        this.service.get_registro(load).subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.registro = response;
                console.log(this.registro);
            }
        )
    }

    get_transtornos1(id) {
        var response;
        var load={
            codigo_expediente:id
        }
        this.service.get_transtornos1(load).subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.transtornos = response;
                console.log(this.transtornos);
            }
        )
    }

}