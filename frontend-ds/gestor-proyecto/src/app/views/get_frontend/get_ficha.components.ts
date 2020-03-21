import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'get_frontend',
    templateUrl: './get_ficha.components.html'
})

export class GetFichaComponent {
    public listado_ficha:any[];

    constructor(public service:AppService) {
        this.listado_ficha = [];
    }

    public alumnos_datos = {
        id_alumno:""
    }

    get_ficha(id) {
        var response;
        var load={
            id_alumno:id
            }
        this.service.get_ficha(load).subscribe(
            data => response = data,
            err => {
                console.log("Error al consultar el servicio");
            },
            () => {
                this.listado_ficha = response;
                console.log(this.listado_ficha);
            }
        )
    }

    

}